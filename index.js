#! /usr/bin/env node

'use strict'

const minimist = require('minimist')
const path = require('path')
const ElasticSearch = require('elasticsearch')

function parseArgs (argvs) {
  const argv = minimist(argvs, {
    alias: {
      host: 'c',
      port: 'p',
      config: 'c'
    },
    default: {
      host: 'localhost',
      port: '9200'
    }
  })
  if (!argv.config) {
    throw new Error('A path to the config to use is required (-c)')
  }
  if (!path.isAbsolute(argv.config)) {
    argv.config = path.join(process.cwd(), argv.config)
  }

  return argv
}

function run (opts) {
  if (!opts.config) {
    throw new error('A path to the config to use is required')
  }
  opts.host = opts.host || 'localhost'
  opts.port = opts.port || 9200

  const esClient = new ElasticSearch.Client({host: `${opts.host}:${opts.port}` })
  const config = require(opts.config)

  config.forEach((object) => {
    esClient.index({
      index: '.kibana',
      type: object._type,
      id: object._id,
      body: object._source
    })
  })
}

module.exports = run

if (require.main === module) {
  run(parseArgs(process.argv.slice(2)))
}