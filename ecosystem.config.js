module.exports = {
  apps: [{
    name: 'QA-client',
    script: './server/index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-223-28-104.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/qa_1st.pem',
      ref: 'origin/master',
      repo: 'git@github.com:shazamazon/modules-qa.git',
      path: '/home/ubuntu/modules-qa',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
