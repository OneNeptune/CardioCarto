# Schema Information
## users
column name | data type | details
------------ | -------------| -------------
id | integer | not null, primary key
email | string | not null, indexed, unique
first_name | string | not null, indexed
last_name | string | not null, indexed
password_digest | string | not null
session_token | string | not null, indexed

## routes
column name | data type | details
------------ | -------------| -------------
id | integer | not null, primary key
user_id | integer | not null, foreign key (references users)
title | string | not null
polylines | string | not null
distance | float | not null
duration | integer | not null, default: 0
completed | boolean | not null, default: false
start_address | string | not null
finish_address | string | not null
completion_time | integer |

## friendships
column name | data type | details
------------ | -------------| -------------
id | integer | not null, primary key
intiator_id | integer | not null, foreign key (references users), indexed, unique [receiver_id]
receiver_id | integer | not null, foreign key (references users), indexed
status | boolean | not null

## comments
column name | data type | details
------------ | -------------| -------------
id | integer | not null, primary key
author_id | integer | not null, foreign key (references users)
route_id | integer | not null, foreign key (references routes)
body | string | not null
