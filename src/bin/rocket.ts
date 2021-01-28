#! /usr/bin/env node

import { RocketCliParser } from "../entities"

/**
 * The distance value. 
 * 
 * Expects a CLI command: e.g. node rocket 384400
 */
const distance: string = process.argv.slice(2)[0];

RocketCliParser.logTravelTime( distance );    
