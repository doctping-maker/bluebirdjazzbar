#!/bin/bash

# Exit immediately if any command exits with a non-zero status
set -e

# Change directory to the project root (where this script resides)
cd "$(dirname "$0")/.."

# Load configuration variables
CONFIG_FILE="./deploy_config.env"
if [ ! -f "$CONFIG_FILE" ]; then
    echo "Error: $CONFIG_FILE not found! Please create it from deploy_config.env template."
    exit 1
fi

source "$CONFIG_FILE"

echo "=================================================="
echo "🚀 Deploying Bluebird Jazz Bar to Hostinger VPS"
echo "=================================================="
echo "Target IP:   $VPS_IP"
echo "Target User: $VPS_USER"
echo "Target Port: $VPS_PORT"
echo "Remote Dir:  $REMOTE_DIR"
echo "Domain:      $DOMAIN_NAME"
echo "=================================================="

# Check if target IP is placeholder
if [ "$VPS_IP" = "12.34.56.78" ]; then
    echo "⚠️  WARNING: You are using the default placeholder IP (12.34.56.78)."
    echo "Please update your Hostinger VPS IP address in deploy_config.env first."
    exit 1
fi

# Secure the private key permissions (SSH requirement)
if [ -f "$KEY_PATH" ]; then
    chmod 600 "$KEY_PATH"
else
    echo "Error: Private key not found at $KEY_PATH"
    exit 1
fi

echo "📦 Step 1: Building Next.js application..."
npm run build

echo "📁 Step 2: Ensuring remote directory exists on VPS..."
ssh -i "$KEY_PATH" -p "$VPS_PORT" -o StrictHostKeyChecking=no "$VPS_USER@$VPS_IP" "mkdir -p $REMOTE_DIR"

echo "📤 Step 3: Syncing static export files to VPS..."
rsync -avz -e "ssh -i $KEY_PATH -p $VPS_PORT -o StrictHostKeyChecking=no" --delete out/ "$VPS_USER@$VPS_IP:$REMOTE_DIR"

echo "=================================================="
echo "🎉 DEPLOYMENT COMPLETED SUCCESSFULLY!"
echo "Your changes are uploaded to $REMOTE_DIR on the VPS."
echo "Visit your site at: http://$DOMAIN_NAME"
echo "=================================================="
