# 🚀 Git & Deployment Complete Guide

## Part 1: Push to Git (5 minutes)

### Step 1: Initialize Git Repository

```bash
# Navigate to project root
cd d:\trial_project

# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Production-grade SaaS dashboard platform"
```

### Step 2: Create Remote Repository

**Option A: GitHub (Recommended)**
1. Go to https://github.com/new
2. Create repository (e.g., `saas-dashboard`)
3. **Don't** initialize with README (we have one)
4. Copy the repository URL

**Option B: GitLab**
1. Go to https://gitlab.com/projects/new
2. Create project
3. Copy the repository URL

**Option C: Gitea (Self-hosted)**
1. Create repository on your Gitea instance
2. Copy the repository URL

### Step 3: Connect Local to Remote

```bash
# Add remote (replace URL with your repository)
git remote add origin https://github.com/YOUR-USERNAME/saas-dashboard.git

# Verify remote
git remote -v

# Push to remote (first time)
git branch -M main
git push -u origin main
```

### Step 4: Add .gitignore (Already Done!)

Your project already has `.gitignore` with:
```
node_modules/
.env
.env.local
.env.*.local
dist/
build/
.next/
.DS_Store
*.log
.turbo
```

---

## Part 2: Deploy to Production

### Option 1: Vercel (FASTEST - 5 minutes)

#### 1.1 Deploy via Vercel Dashboard

```bash
# 1. Push code to GitHub first (see Part 1)

# 2. Go to https://vercel.com/new

# 3. Import repository from GitHub
#    - Select your repository
#    - Click "Import"

# 4. Configure project
#    - Framework: Next.js
#    - Root Directory: ./apps/web (for main app)
#    - Environment Variables:
#      DATABASE_URL=your_postgres_url
#      NEXTAUTH_SECRET=generate_with_openssl
#      NEXTAUTH_URL=your_vercel_url

# 5. Click "Deploy"
#    Done! Your app is live in ~2 minutes
```

#### 1.2 Deploy Admin App to Vercel

```bash
# Create separate project for admin
# 1. Go to https://vercel.com/new
# 2. Import same repository again
# 3. Select "Edit" in root directory
# 4. Change to ./apps/admin
# 5. Set same environment variables
# 6. Deploy
```

#### 1.3 Generate NEXTAUTH_SECRET

```bash
# Option A: Use OpenSSL (Windows PowerShell)
$secret = [System.Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes((Get-Random -Minimum 100000000000000 -Maximum 999999999999999).ToString()))
Write-Host $secret

# Option B: Use online tool
# Visit: https://generate-secret.vercel.app/32

# Copy the secret to Vercel environment variables
```

#### 1.4 Database Setup for Vercel

**Option A: Managed PostgreSQL (Recommended)**
- Use Vercel Postgres: https://vercel.com/storage/postgres
- Automatically injected as `POSTGRES_PRISMA_URL`
- Click "Create database" in your Vercel project

**Option B: External PostgreSQL**
- Railway: https://railway.app
- Supabase: https://supabase.com
- Render: https://render.com
- Neon: https://neon.tech
- Copy connection string to DATABASE_URL

#### 1.5 Full Environment Variables for Vercel

```bash
# .env.production (reference only - set in Vercel UI)
DATABASE_URL=postgresql://user:password@host:5432/dbname
NEXTAUTH_SECRET=your_generated_secret_here
NEXTAUTH_URL=https://yourdomain.vercel.app
NEXTAUTH_PROVIDERS_CREDENTIALS_PASSWORD=your_secure_password
```

**Access Vercel UI:**
1. Go to your Vercel project
2. Settings → Environment Variables
3. Add each variable
4. Redeploy

---

### Option 2: Docker + Railway (10 minutes)

#### 2.1 Build Docker Image

```bash
# Build image
docker build -t saas-dashboard .

# Test locally
docker run -p 3000:3000 -e DATABASE_URL=postgresql://... saas-dashboard
```

#### 2.2 Deploy to Railway

```bash
# 1. Create account: https://railway.app
# 2. Create new project
# 3. Connect GitHub repository
# 4. Select Dockerfile
# 5. Add environment variables:
#    - DATABASE_URL
#    - NEXTAUTH_SECRET
#    - NEXTAUTH_URL
# 6. Deploy

# Railway automatically deploys on git push!
```

**Railway Environment Variables:**
1. Dashboard → Your Project
2. Variables tab
3. Add:
   - `DATABASE_URL` = Railway Postgres connection string
   - `NEXTAUTH_SECRET` = generated secret
   - `NEXTAUTH_URL` = railway.app domain

---

### Option 3: Self-Hosted (VPS) - 30 minutes

#### 3.1 Prepare VPS

```bash
# SSH into your VPS
ssh root@your-vps-ip

# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install pnpm
sudo npm install -g pnpm

# Install PostgreSQL
sudo apt install -y postgresql postgresql-contrib

# Install Nginx
sudo apt install -y nginx

# Install PM2 (process manager)
sudo npm install -g pm2
```

#### 3.2 Deploy Application

```bash
# Clone repository
cd /opt
sudo git clone https://github.com/YOUR-USERNAME/saas-dashboard.git
cd saas-dashboard

# Install dependencies
sudo pnpm install

# Build application
sudo pnpm build

# Setup environment
sudo cp apps/web/.env.example apps/web/.env.production
sudo nano apps/web/.env.production
# Edit: DATABASE_URL, NEXTAUTH_SECRET, NEXTAUTH_URL

# Setup database
cd packages/db
sudo pnpm db:push
cd ../..

# Start with PM2
sudo pm2 start "pnpm start" --name "saas-dashboard"
sudo pm2 startup
sudo pm2 save
```

#### 3.3 Configure Nginx

```bash
# Create Nginx config
sudo nano /etc/nginx/sites-available/saas-dashboard
```

**Add this config:**
```nginx
upstream saas-dashboard {
    server localhost:3000;
}

server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://saas-dashboard;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/saas-dashboard /etc/nginx/sites-enabled/

# Test Nginx
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

#### 3.4 Setup SSL (HTTPS)

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Generate SSL certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Auto-renew
sudo systemctl enable certbot.timer
```

---

### Option 4: Docker Compose on VPS (Easiest Self-Hosted)

#### 4.1 Setup VPS

```bash
# SSH into VPS
ssh root@your-vps-ip

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Verify installation
docker --version
docker-compose --version
```

#### 4.2 Deploy with Docker Compose

```bash
# Clone repository
cd /opt
sudo git clone https://github.com/YOUR-USERNAME/saas-dashboard.git
cd saas-dashboard

# Setup environment
sudo cp apps/web/.env.example apps/web/.env.production
sudo cp packages/db/.env.example packages/db/.env
sudo nano apps/web/.env.production
# Edit DATABASE_URL, NEXTAUTH_SECRET, NEXTAUTH_URL

# Start all services
sudo docker-compose up -d

# Initialize database
sudo docker-compose exec web pnpm db:push

# View logs
sudo docker-compose logs -f
```

#### 4.3 Auto-Restart on Reboot

```bash
# Edit docker-compose.yml to add restart policy
# (already included in project)

# Verify it's running
sudo docker ps
```

---

## Deployment Comparison

| Feature | Vercel | Railway | VPS | Docker |
|---------|--------|---------|-----|--------|
| **Setup Time** | 5 min | 10 min | 30 min | 10 min |
| **Cost** | Free tier | $5/month | $5-20/month | $5-20/month |
| **Auto Deploy** | Yes | Yes | Manual | Manual |
| **Scaling** | Automatic | Manual | Manual | Manual |
| **SSL** | Free | Free | Free | Manual |
| **Database** | Integrated | Integrated | Manual | Manual |
| **Easiest** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |

**Recommendation**: Start with **Vercel** for simplicity, then move to **Railway** or **Docker** if you need more control.

---

## Production Checklist

### Pre-Deployment
- [ ] All code committed to git
- [ ] Environment variables configured
- [ ] Database created and migrations run
- [ ] SSL certificate ready
- [ ] Domain configured
- [ ] NEXTAUTH_SECRET generated
- [ ] Backups configured

### Post-Deployment
- [ ] Test login: demo@example.com / password
- [ ] Test workspace switching
- [ ] Test task creation/editing
- [ ] Check analytics dashboard
- [ ] Monitor error logs
- [ ] Setup monitoring/alerts
- [ ] Setup backups

### Monitoring
- [ ] Error tracking (Sentry, LogRocket)
- [ ] Performance monitoring (Vercel Analytics, New Relic)
- [ ] Uptime monitoring (Pingdom, UptimeRobot)
- [ ] Log aggregation (LogRocket, Loggly)

---

## Troubleshooting Deployment

### "Cannot find module @saas/*"
```bash
# Solution: Rebuild with proper transpilation
pnpm build
# Vercel automatically runs this
```

### "Database connection failed"
```bash
# Solution: Check environment variables
echo $DATABASE_URL
# Should output: postgresql://user:password@host:5432/db

# Verify connection
psql $DATABASE_URL -c "SELECT 1"
```

### "NEXTAUTH error"
```bash
# Solution: Generate new secret
openssl rand -base64 32

# Add to environment
NEXTAUTH_SECRET=your_new_secret
NEXTAUTH_URL=https://yourdomain.com
```

### "Port 3000 already in use"
```bash
# Solution: Use different port
PORT=3001 npm start
# Or kill process using port
sudo lsof -i :3000
sudo kill -9 PID
```

### "Prisma migrations failed"
```bash
# Solution: Force push schema
cd packages/db
pnpm db:push --force-reset
# Warning: This deletes all data!

# Or create migration
pnpm db:migrate dev --name init
```

---

## CI/CD Pipeline (GitHub Actions)

**File**: `.github/workflows/deploy.yml`

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'pnpm'
      
      - run: pnpm install
      - run: pnpm build
      - run: pnpm lint
      
      - name: Deploy to Vercel
        run: pnpm dlx vercel --prod --token ${{ secrets.VERCEL_TOKEN }}
```

To use this:
1. Copy the YAML to `.github/workflows/deploy.yml`
2. Add `VERCEL_TOKEN` to GitHub secrets
3. Every push to main automatically deploys!

---

## Quick Start Commands

### For Vercel
```bash
# 1. Push to GitHub
git add .
git commit -m "Deploy to production"
git push origin main

# 2. Visit https://vercel.com/new
# 3. Import repository
# 4. Add environment variables
# 5. Deploy!
```

### For Railway
```bash
# 1. Push to GitHub
git push origin main

# 2. Connect GitHub to Railway
# 3. Railway automatically deploys!
```

### For VPS
```bash
# 1. Deploy code
ssh root@vps-ip
cd /opt/saas-dashboard
git pull origin main

# 2. Restart application
pm2 restart all
# or
docker-compose up -d
```

---

## Production URLs

Once deployed, you'll have:

```
Main Dashboard:  https://yourdomain.com
Admin Panel:     https://admin.yourdomain.com (or separate deployment)
API:             https://yourdomain.com/api/
Database:        PostgreSQL at your provider
```

---

## Monitoring & Maintenance

### Daily
```bash
# Check application logs
pm2 logs

# Check database
psql $DATABASE_URL -c "SELECT COUNT(*) FROM \"User\";"
```

### Weekly
```bash
# Check disk space
df -h

# Check PostgreSQL size
psql $DATABASE_URL -c "SELECT pg_size_pretty(pg_database_size(current_database()));"

# Check error rates
# Visit your monitoring dashboard
```

### Monthly
```bash
# Backup database
pg_dump $DATABASE_URL > backup-$(date +%Y%m%d).sql

# Review logs
tail -n 1000 /var/log/pm2.log

# Update dependencies
pnpm update --latest
```

---

## Rollback Plan

### If something breaks after deployment

```bash
# Option 1: Rollback on Vercel
# Dashboard → Deployments → Select previous version → Redeploy

# Option 2: Rollback on VPS
git revert HEAD
git push origin main

# Option 3: Manual restart
pm2 restart all
# or
docker-compose restart
```

---

## Cost Estimation (Monthly)

```
Vercel:         $0-20 (free tier available)
Railway:        $5-50
VPS (Hetzner):  $5-20
PostgreSQL:     $15-50
Total:          $20-120/month
```

For a new project, start with **Vercel Free Tier** = **$0/month**

---

**Next Step**: Choose your deployment option and follow the steps above!

Questions? Check DEPLOYMENT.md for more details.
