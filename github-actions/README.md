# Add homepage in package.json
```
"homepage": "https://<githubusername>.github.io/<app>"

```
# Enable Github Pages
To active Github pages options, we must create **gh-pages** branch and we must go to 
**Go to Settings -> Pages** and active
# Create SSH Key
Create private and public SSH Key to granted priviledges to deploy in Github Pages from Github repository.
```
ssh-keygen -t rsa -b 4096 -C "$(git config user.email)" -f "gh-pages" -N ""
```
# Add Keys to Github

When create Keys, go to **Settings -> Deploy Keys** and **Enable Write Access** after copy / paste **gh-pages.pub** key content in text area.

Use private key to add in **Settings -> Secrets** and add **gh-pages** file content in **Repository secrets** section with secrets ID: **ACTIONS_DEPLOY_KEY**.

# Create workflow for deploy

Now we add workflow that use to deploy our project build result in Github Pages:

```
- name: deploy to gh-pages
- uses: peaceiris/actions-gh-pages@v3
with:
    deploy_key: ${{ secrets.ACTIONS_DEPLOY_KEY }}
    publish_dir: ./build
```
[Reference](https://github.com/templates-desarrollo-web-mobile/freelancer-reactjs/blob/master/.github/workflows/build_test_react.yml)

# Last step

Commit and push to select branch and wait to execute all proccess

