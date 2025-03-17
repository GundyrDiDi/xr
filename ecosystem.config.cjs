module.exports = {
  apps : [{
    name:"client-nuxt",
    port: '3000',
    watch: true, 
    exec_mode: 'cluster',
    instances: 'max',
    autorestart: true,
    log_date_format: "YYYY-MM-DD HH:mm:ss",
    script: './.output/server/index.mjs',
    merge_logs: true,
  }]
}
