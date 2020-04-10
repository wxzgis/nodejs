const { log } = console;

// const axios = require('axios');
// import axios from 'axios'
const timeUtils = require('./utils/timeUtils');

log(timeUtils.get_time());

log(timeUtils.get_time(timeUtils.get_ymd()));


