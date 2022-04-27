# Palenca API

**Summary**

Test API for Palenca

## Overview

Test Api that can login and show user info

## Requirements

You need to have the following services installed in your computer:

* node > 12.0

### Mac OS

```
$ brew install node
```


### Clone the repo

```
$ git clone git@github.com:alexismellamo/palenca-api.git
```

### Install node dependencies

```
$ yarn
```


## Run the server

```
$ yarn start
```


## Basic use

General description of how to use the module with basic example.

## API

### GET `/`

Returns "Hello Palenca"

### POST `/uber/login`

Takes the email and password as parameters, return a dict with an access_token or an error

### GET `/uber/profile/:access_token`

Takes the access_token as parameter, returns the profile or an error
 

## Examples

Check [curl.test](/curl.txt).

## Tests

```
$ yarn test
```
