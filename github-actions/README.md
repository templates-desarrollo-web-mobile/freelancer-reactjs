# Add homepage in package.json
```
"homepage": "https://<githubusername>.github.io/<app>"

```
# Enable Github Pages
Go to Settings -> Pages and active
# Create SSH Key
```
ssh-keygen -t rsa -b 4096 -C "$(git config user.email)" -f "gh-pages" -N ""
```