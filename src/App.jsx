import React, { useState } from "react";

// Categorized dork lists
const categorizedGoogleDorks = {
  "Sensitive Files": [
    'intitle:"index of"',
'intitle:"index of" .env',
'intitle:"index of" .git',
'intitle:"index of" /backup',
'intitle:"index of" /admin',
'intitle:"index of" /wp-content',
'intitle:"index of" /config',
'filetype:env',
'filetype:sql',
'filetype:log',
'filetype:bak',
'filetype:mdb',
'filetype:ini',
'filetype:cfg',
'filetype:conf',
'filetype:yml',
'filetype:yaml',
'filetype:csv',
'filetype:xls',
'filetype:doc',
'filetype:pdf',
'filetype:txt password',
'ext:sql | ext:dbf | ext:mdb',
'ext:log inurl:"password"',
'ext:ini intext:"password"',
'ext:conf intext:"password"',
'ext:cfg intext:"password"',
'ext:env intext:"DB_PASSWORD"',
'ext:yml intext:"database"',
'ext:yaml intext:"secret"',
'ext:csv intext:"user,pass"',
'ext:xls intext:"username"',
'ext:doc intext:"credentials"',
'ext:pdf intext:"confidential"',
'ext:txt intext:"api_key",\ ',
  ],
  "Login Pages": [
    'intitle:"login"',
'intitle:"admin"',
'intitle:"admin login"',
'intitle:"login page"',
'intitle:"sign in"',
'intitle:"log in"',
'intitle:"administrator login"',
'intitle:"wp-admin"',
'inurl:/admin/login.php',
'inurl:/admin/index.php',
'inurl:/admin/admin.php',
'inurl:/admin_area/login',
'inurl:/user/login',
'inurl:/wp-login.php',
'inurl:/administrator/index.php',
'inurl:/admin/account.php',
'inurl:/admincp/login.php',
'inurl:/adminpanel/login.php',
'inurl:/admin/login.asp',
'inurl:/admin/account.asp',
'inurl:/admin_area/admin.asp',
'inurl:/admin_area/login.asp',
'inurl:/admin_area/index.asp',
'inurl:/admin/controlpanel.php',
'inurl:/admin/cp.php',
'inurl:/admin/home.php',
'inurl:/admin_area/controlpanel.php',
'inurl:/admin_area/cp.php',
'inurl:/admin_area/home.php',
  ],
  "Web Servers": [
    'intitle:"Apache HTTP Server"',
'intitle:"nginx"',
'intitle:"IIS"',
'intitle:"Microsoft-IIS"',
'intitle:"Tomcat"',
'intitle:"JBoss"',
'intitle:"WebLogic"',
'intitle:"WebSphere"',
'intitle:"GlassFish"',
'intitle:"WildFly"',
'intitle:"Jetty"',
'intitle:"Lighttpd"',
'intitle:"Cherokee"',
'intitle:"LiteSpeed"',
'intitle:"Caddy"',
'intitle:"OpenLiteSpeed"',
'intitle:"Hiawatha"',
'intitle:"Tengine"',
'intitle:"Apache Tomcat"',
'intitle:"Apache HTTP Server"',
'intitle:"Apache/2.4.41"',
'intitle:"nginx/1.18.0"',
'intitle:"Microsoft-IIS/10.0"',
'intitle:"Microsoft-IIS/8.5"',
'intitle:"Microsoft-IIS/7.5"',
'intitle:"Microsoft-IIS/7.0"',
'intitle:"Microsoft-IIS/6.0"',
'intitle:"Microsoft-IIS/5.0"',
'intitle:"Microsoft-IIS/4.0"',
'intitle:"Microsoft-IIS/3.0"',
'intitle:"Microsoft-IIS/2.0"',
'intitle:"Microsoft-IIS/1.0"',
],
  "Cameras": [
    'intitle:"Live View / - AXIS"',
'inurl:view/view.shtml',
'inurl:":8080" intext:"camera"',
'intitle:"webcamXP 5"',
'intitle:"IP Camera Viewer"',
'inurl:top.htm inurl:currenttime',
'intitle:"DVR Login"',
'intitle:"Network Camera"',
'intitle:"Camera Viewer"',
'intitle:"Surveillance Camera"',
'intitle:"Security Camera"',
'intitle:"IP Camera"',
'intitle:"Web Camera"',
'intitle:"Live View"',
'intitle:"Live Stream"',
'intitle:"Live Feed"',
'intitle:"Live Video"',
'intitle:"Live CCTV"',
'intitle:"Live Surveillance"',
'intitle:"Live Monitoring"',
'intitle:"Live Security"',
'intitle:"Live IP Camera"',
'intitle:"Live Web Camera"',
'intitle:"Live Network Camera"',
'intitle:"Live DVR"',
'intitle:"Live NVR"',
'intitle:"Live PVR"',
'intitle:"Live HVR"',
'intitle:"Live AVR"',
'intitle:"Live BVR"',
'intitle:"Live CVR"',
'intitle:"Live QVR"',
'intitle:"Live XVR"',
  ],
  "Vulnerabilities": [
    '"PHP Parse error" | "PHP Warning" | "PHP Error"',
    'intext:"sql syntax near" inurl:index.php?id=',
    'intext:"error in your SQL syntax"',
    'inurl:"/phpinfo.php"',
    'inurl:"/test.php"',
    'intext:"error in your SQL syntax"',
'intext:"Warning: mysql_connect()"',
'intext:"Warning: mysqli_connect()"',
'intext:"Warning: pg_connect()"',
'intext:"Warning: oci_connect()"',
'intext:"Warning: odbc_connect()"',
'intext:"Warning: sqlsrv_connect()"',
'intext:"Warning: PDO::__construct()"',
'intext:"Warning: include()"',
'intext:"Warning: require()"',
'intext:"Warning: include_once()"',
'intext:"Warning: require_once()"',
'intext:"Warning: file_get_contents()"',
'intext:"Warning: file_put_contents()"',
'intext:"Warning: fopen()"',
'intext:"Warning: fwrite()"',
'intext:"Warning: fread()"',
'intext:"Warning: fclose()"',
'intext:"Warning: unlink()"',
'intext:"Warning: mkdir()"',
'intext:"Warning: rmdir()"',
'intext:"Warning: chmod()"',
'intext:"Warning: chown()"',
'intext:"Warning: chgrp()"',
'intext:"Warning: copy()"',
'intext:"Warning: rename()"',
'intext:"Warning: symlink()"',
'intext:"Warning: link()"',
'intext:"Warning: unlink()"',
'intext:"Warning: parse_url()"',
'intext:"Warning: parse_str()"',
'intext:"Warning: parse_ini_file()"',
'intext:"Warning: parse_ini_string()"',
  ],
  "Database Exposures":[
  'intext:"phpMyAdmin"',
'intext:"MySQL dump"',
'intext:"SQL dump"',
'intext:"Database dump"',
'intext:"phpPgAdmin"',
'intext:"MongoDB"',
'intext:"PostgreSQL"',
'intext:"Oracle Database"',
'intext:"Microsoft SQL Server"',
'intext:"SQLite"',
'intext:"MariaDB"',
'intext:"Database connection"',
'intext:"DB_HOST"',
'intext:"DB_USER"',
'intext:"DB_PASSWORD"',
'intext:"DB_NAME"',
'intext:"DB_PORT"',
'intext:"DB_SERVER"',
'intext:"DB_DRIVER"',
'intext:"DB_TYPE"',
'intext:"DB_CONNECTION"',
'intext:"DB_DATABASE"',
'intext:"DB_USERNAME"',
'intext:"DB_PASSWORD"',
  ],
  "API Keys & Secrets":[
  'intext:"api_key"',
'intext:"api key"',
'intext:"api-key"',
'intext:"apikey"',
'intext:"api secret"',
'intext:"api_secret"',
'intext:"api-secret"',
'intext:"apisecret"',
'intext:"client_id"',
'intext:"client_id"',
'intext:"client-id"',
'intext:"clientid"',
'intext:"client_secret"',
'intext:"client_secret"',
'intext:"client-secret"',
'intext:"clientsecret"',
'intext:"access_key"',
'intext:"access key"',
'intext:"access-key"',
'intext:"accesskey"',
'intext:"secret_key"',
'intext:"secret key"',
'intext:"secret-key"',
'intext:"secretkey"',
'intext:"private_key"',
'intext:"private key"',
'intext:"private-key"',
'intext:"privatekey"',
'intext:"public_key"',
'intext:"public key"',
'intext:"public-key"',
'intext:"publickey"',
'intext:"encryption_key"',
'intext:"encryption key"',
'intext:"encryption-key"',
'intext:"encryptionkey"',
'intext:"decryption_key"',
'intext:"decryption key"',
'intext:"decryption-key"',
'intext:"decryptionkey"',
  ],
  "Git & Version Control Exposures":[
  'intitle:"index of" .git',
'intitle:"index of" .svn',
'intitle:"index of" .hg',
'intitle:"index of" .bzr',
'intitle:"index of" .cvs',
'intitle:"index of" .gitignore',
'intitle:"index of" .svnignore',
'intitle:"index of" .hgignore',
'intitle:"index of" .bzrignore',
'intitle:"index of" .cvsignore',
'intitle:"index of" .gitattributes',
'intitle:"index of" .svnattributes',
'intitle:"index of" .hgattributes',
'intitle:"index of" .bzrattributes',
'intitle:"index of" .cvsattributes',
'intitle:"index of" .gitmodules',
'intitle:"index of" .svnmodules',
'intitle:"index of" .hgmodules',
'intitle:"index of" .bzrmodules',
'intitle:"index of" .cvsmodules',
'intitle:"index of" .gitconfig',
'intitle:"index of" .svnconfig',
'intitle:"index of" .hgconfig',
'intitle:"index of" .bzrconfig',
'intitle:"index of" .cvsconfig',
'intitle:"index of" .gitkeep',
'intitle:"index of" .svnkeep',
'intitle:"index of" .hgkeep',
'intitle:"index of" .bzrkeep',
'intitle:"index of" .cvskeep',
'intitle:"index of" .gitlab-ci.yml',
'intitle:"index of" .travis.yml',
'intitle:"index of" .circleci',
'intitle:"index of" .github',
'intitle:"index of" .gitlab',
'intitle:"index of" .bitbucket',
'intitle:"index of" .jenkins',
'intitle:"index of" .drone',
'intitle:"index of" .codeship',
'intitle:"index of" .semaphore',
'intitle:"index of" .appveyor',
'intitle:"index of" .wercker',
'intitle:"index of" .teamcity',
'intitle:"index of" .bamboo',
'intitle:"index of" .buildkite',
'intitle:"index of" .codebuild',
'intitle:"index of" .codefresh',
'intitle:"index of" .codemagic',
'intitle:"index of" .codestar',
'intitle:"index of" .codeclimate',
'intitle:"index of" .codecov',
'intitle:"index of" .coveralls',
'intitle:"index of" .scrutinizer',
'intitle:"index of" .sonar',
'intitle:"index of" .travis',
'intitle:"index of" .circle',
'intitle:"index of" .github',
'intitle:"index of" .gitlab',
'intitle:"index of" .bitbucket',
'intitle:"index of" .jenkins',
'intitle:"index of" .drone',
'intitle:"index of" .codeship',
'intitle:"index of" .semaphore',
'intitle:"index of" .appveyor',
'intitle:"index of" .wercker',
'intitle:"index of" .teamcity',
'intitle:"index of" .bamboo',
'intitle:"index of" .buildkite',
'intitle:"index of" .codebuild',
'intitle:"index of" .codefresh',
'intitle:"index of" .codemagic',
'intitle:"index of" .codestar',
'intitle:"index of" .codeclimate',
'intitle:"index of" .codecov',
'intitle:"index of" .coveralls',
'intitle:"index of" .scrutinizer',
'intitle:"index of" .sonar',
],

"Cloud & DevOps Exposures":[
'intext:"AWS_ACCESS_KEY_ID',
'intext:"AWS_SECRET_ACCESS_KEY',
'intext:"AWS_SESSION_TOKEN',
'intext:"AWS_DEFAULT_REGION',
'intext:"AWS_ACCOUNT_ID',
'intext:"AWS_ACCOUNT_NUMBER',
'intext:"AWS_ACCOUNT_NAME',
'intext:"AWS_ACCOUNT_ALIAS',
'intext:"AWS_ACCOUNT_ROLE',
'intext:"AWS_ACCOUNT_USER',
'intext:"AWS_ACCOUNT_PASSWORD',
'intext:"AWS_ACCOUNT_EMAIL',
'intext:"AWS_ACCOUNT_PHONE',
'intext:"AWS_ACCOUNT_ADDRESS',
'intext:"AWS_ACCOUNT_CITY',
'intext:"AWS_ACCOUNT_STATE',
'intext:"AWS_ACCOUNT_ZIP',
'intext:"AWS_ACCOUNT_COUNTRY',
'intext:"AWS_ACCOUNT_ORG',
'intext:"AWS_ACCOUNT_DEPT',
'intext:"AWS_ACCOUNT_TEAM',
'intext:"AWS_ACCOUNT_GROUP',
'intext:"AWS_ACCOUNT_PROJECT',
'intext:"AWS_ACCOUNT_ENV',
'intext:"AWS_ACCOUNT_STAGE',
'intext:"AWS_ACCOUNT_STATUS',
'intext:"AWS_ACCOUNT_TYPE',
'intext:"AWS_ACCOUNT_LEVEL',
'intext:"AWS_ACCOUNT_TIER',
'intext:"AWS_ACCOUNT_PLAN',
'intext:"AWS_ACCOUNT_BILLING',
'intext:"AWS_ACCOUNT_PAYMENT',
'intext:"AWS_ACCOUNT_CREDIT',
'intext:"AWS_ACCOUNT_DEBIT',
'intext:"AWS_ACCOUNT_BALANCE',
'intext:"AWS_ACCOUNT_LIMIT',
'intext:"AWS_ACCOUNT_THRESHOLD',
'intext:"AWS_ACCOUNT_ALERT',
'intext:"AWS_ACCOUNT_NOTIFICATION',
'intext:"AWS_ACCOUNT_REPORT',
'intext:"AWS_ACCOUNT_STATEMENT',
'intext:"AWS_ACCOUNT_INVOICE',
'intext:"AWS_ACCOUNT_RECEIPT',
'intext:"AWS_ACCOUNT_TRANSACTION',
'intext:"AWS_ACCOUNT_HISTORY',
'intext:"AWS_ACCOUNT_LOG',
'intext:"AWS_ACCOUNT_AUDIT',
'intext:"AWS_ACCOUNT_COMPLIANCE',
'intext:"AWS_ACCOUNT_SECURITY',
'intext:"AWS_ACCOUNT_PRIVACY',
'intext:"AWS_ACCOUNT_LEGAL',
'intext:"AWS_ACCOUNT_REGULATORY',
'intext:"AWS_ACCOUNT_GOVERNANCE',
'intext:"AWS_ACCOUNT_RISK',
'intext:"AWS_ACCOUNT_THREAT',
'intext:"AWS_ACCOUNT_VULNERABILITY',
'intext:"AWS_ACCOUNT_EXPLOIT',
'intext:"AWS_ACCOUNT_MALWARE',
'intext:"AWS_ACCOUNT_RANSOMWARE',
'intext:"AWS_ACCOUNT_PHISHING',
'intext:"AWS_ACCOUNT_SPOOFING',
'intext:"AWS_ACCOUNT_DDOS',
'intext:"AWS_ACCOUNT_BRUTE_FORCE',
'intext:"AWS_ACCOUNT_SQL_INJECTION',
'intext:"AWS_ACCOUNT_XSS',
'intext:"AWS_ACCOUNT_CSRF',
'intext:"AWS_ACCOUNT_LFI',
'intext:"AWS_ACCOUNT_RFI',
'intext:"AWS_ACCOUNT_XXE',
'intext:"AWS_ACCOUNT_SSRF',
'intext:"AWS_ACCOUNT_RCE',
'intext:"AWS_ACCOUNT_CVE',
'intext:"AWS_ACCOUNT_CWE',
'intext:"AWS_ACCOUNT_OWASP',
'intext:"AWS_ACCOUNT_NIST',
'intext:"AWS_ACCOUNT_ISO',
'intext:"AWS_ACCOUNT_PCI',
'intext:"AWS_ACCOUNT_HIPAA',
'intext:"AWS_ACCOUNT_GDPR',
'intext:"AWS_ACCOUNT_SOC',
'intext:"AWS_ACCOUNT_FEDRAMP',
'intext:"AWS_ACCOUNT_ITAR',
'intext:"AWS_ACCOUNT_EAR',
'intext:"AWS_ACCOUNT_CCPA',
'intext:"AWS_ACCOUNT_CPRA',
'intext:"AWS_ACCOUNT_VCDPA',
'intext:"AWS_ACCOUNT_PIPEDA',
'intext:"AWS_ACCOUNT_PDPA',
'intext:"AWS_ACCOUNT_LGPD',
'intext:"AWS_ACCOUNT_POPIA',
'intext:"AWS_ACCOUNT_APPI',
'intext:"AWS_ACCOUNT_APEC',
'intext:"AWS_ACCOUNT_CBPR',
'intext:"AWS_ACCOUNT_PRIVACY_SHIELD',
'intext:"AWS_ACCOUNT_SCHREMS',
'intext:"AWS_ACCOUNT_BCR',
'intext:"AWS_ACCOUNT_SCC',
'intext:"AWS_ACCOUNT_DPA',
'intext:"AWS_ACCOUNT_DPO',
'intext:"AWS_ACCOUNT_DPIA',
'intext:"AWS_ACCOUNT_TIA',
'intext:"AWS_ACCOUNT_PIA',
'intext:"AWS_ACCOUNT_LIA',
'intext:"AWS_ACCOUNT_RIA',
'intext:"AWS_ACCOUNT_SIA',
'intext:"AWS_ACCOUNT_FIA',
'intext:"AWS_ACCOUNT_MIA',
'intext:"AWS_ACCOUNT_OIA',
'intext:"AWS_ACCOUNT_QIA',
'intext:"AWS_ACCOUNT_ZIA',

],
"Miscellaneous":[
'intext:"password" filetype:txt',
'intext:"username" filetype:csv',
'intext:"credentials" filetype:xls',
'intext:"confidential" filetype:doc',
'intext:"secret" filetype:pdf',
'intext:"api" filetype:json',
'intext:"token" filetype:xml',
'intext:"key" filetype:yaml',
'intext:"auth" filetype:yml',
'intext:"access" filetype:ini',
'intext:"login" filetype:cfg',
'intext:"admin" filetype:conf',
'intext:"root" filetype:env',
'intext:"db" filetype:sql',
'intext:"mysql" filetype:log',
'intext:"postgres" filetype:bak',
'intext:"oracle" filetype:mdb',
'intext:"sqlserver" filetype:db',
'intext:"sqlite" filetype:db3',
'intext:"mongodb" filetype:bson',
'intext:"redis" filetype:rdb',
'intext:"memcached" filetype:mem',
'intext:"elasticsearch" filetype:es',
'intext:"solr" filetype:solr',
'intext:"couchdb" filetype:couch',
'intext:"cassandra" filetype:cql',
'intext:"neo4j" filetype:cypher',
'intext:"arangodb" filetype:aql',
'intext:"rethinkdb" filetype:rdl',
'intext:"dynamodb" filetype:ddb',
'intext:"cosmosdb" filetype:cdb',
'intext:"firebase" filetype:json',
'intext:"firestore" filetype:json',
'intext:"realtimedb" filetype:json',
'intext:"datastore" filetype:json',
'intext:"bigtable" filetype:json',
'intext:"spanner" filetype:json',
'intext:"bigquery" filetype:json',
'intext:"dataflow" filetype:json',
'intext:"dataproc" filetype:json',
'intext:"dataprep" filetype:json',
'intext:"datafusion" filetype:json',
'intext:"datalab" filetype:json',
'intext:"datastudio" filetype:json',
'intext:"looker" filetype:json',
'intext:"tableau" filetype:json',
'intext:"powerbi" filetype:json',
'intext:"quicksight" filetype:json',
'intext:"redshift" filetype:json',
'intext:"snowflake" filetype:json',
'intext:"teradata" filetype:json',
'intext:"vertica" filetype:json',
'intext:"greenplum" filetype:json',
'intext:"netezza" filetype:json',
'intext:"exasol" filetype:json',
'intext:"clickhouse" filetype:json',
'intext:"presto" filetype:json',
'intext:"trino" filetype:json',
'intext:"hive" filetype:json',
'intext:"impala" filetype:json',
'intext:"drill" filetype:json',
'intext:"kylin" filetype:json',
'intext:"druid" filetype:json',
'intext:"pinot" filetype:json',
'intext:"kudu" filetype:json',
'intext:"kafka" filetype:json',
'intext:"pulsar" filetype:json',
'intext:"rabbitmq" filetype:json',
'intext:"activemq" filetype:json',
'intext:"artemis" filetype:json',
'intext:"nats" filetype:json',
'intext:"nsq" filetype:json',
'intext:"zeromq" filetype:json',
'intext:"zmq" filetype:json',
'intext:"stan" filetype:json',
'intext:"jetstream" filetype:json',
'intext:"liftbridge" filetype:json',
'intext:"redpanda" filetype:json',
'intext:"pravega" filetype:json',
'intext:"bookkeeper" filetype:json',
'intext:"distributedlog" filetype:json',
'intext:"flink" filetype:json',
'intext:"spark" filetype:json',
'intext:"beam" filetype:json',
'intext:"samza" filetype:json',
'intext:"storm" filetype:json',
'intext:"heron" filetype:json',
'intext:"nifi" filetype:json',
'intext:"streamsets" filetype:json',
'intext:"kafka connect" filetype:json',
'intext:"kafka streams" filetype:json',
'intext:"ksql" filetype:json',
'intext:"flink sql" filetype:json',
'intext:"spark sql" filetype:json',
'intext:"presto sql" filetype:json',
'intext:"trino sql" filetype:json',
'intext:"hive sql" filetype:json',
'intext:"impala sql" filetype:json',
'intext:"drill sql" filetype:json',
'intext:"kylin sql" filetype:json',
'intext:"druid sql" filetype:json',
'intext:"pinot sql" filetype:json',
'intext:"kudu sql" filetype:json',
'intext:"kafka sql" filetype:json',
'intext:"pulsar sql" filetype:json',
'intext:"rabbitmq sql" filetype:json',
'intext:"activemq sql" filetype:json',
'intext:"artemis sql" filetype:json',
'intext:"nats sql" filetype:json',
'intext:"nsq sql" filetype:json',
'intext:"zeromq sql" filetype:json',
'intext:"zmq sql" filetype:json',
'intext:"stan sql" filetype:json',
'intext:"jetstream sql" filetype:json',
'intext:"liftbridge sql" filetype:json',
'intext:"redpanda sql" filetype:json',
'intext:"pravega sql" filetype:json',
'intext:"bookkeeper sql" filetype:json',
'intext:"distributedlog sql" filetype:json',
'intext:"flink sql" filetype:json',
'intext:"spark sql" filetype:json',
'intext:"beam sql" filetype:json',
'intext:"samza sql" filetype:json',
'intext:"storm sql" filetype:json',
'intext:"heron sql" filetype:json',
'intext:"nifi sql" filetype:json',
'intext:"streamsets sql" filetype:json',
'intext:"kafka connect sql" filetype:json',
'intext:"kafka streams sql" filetype:json',
'intext:"ksql" filetype:json',
'intext:"flink sql" filetype:json',
'intext:"spark sql" filetype:json',
'intext:"presto sql" filetype:json',
'intext:"trino sql" filetype:json',
'intext:"hive sql" filetype:json',
'intext:"impala sql" filetype:json',
'intext:"drill sql" filetype:json',
'intext:"kylin sql" filetype:json',
'intext:"druid sql" filetype:json',
'intext:"pinot sql" filetype:json',
'intext:"kudu sql" filetype:json',
'intext:"kafka sql" filetype:json',
'intext:"pulsar sql" filetype:json',
'intext:"rabbitmq sql" filetype:json',
'intext:"activemq sql" filetype:json',
'intext:"artemis sql" filetype:json',
'intext:"nats sql" filetype:json',
'intext:"nsq sql" filetype:json',
'intext:"zeromq sql" filetype:json',
'intext:"zmq sql" filetype:json',
'intext:"stan sql" filetype:json',
'intext:"jetstream sql" filetype:json',
'intext:"liftbridge sql" filetype:json',
'intext:"redpanda sql" filetype:json',
'intext:"pravega sql" filetype:json',
'intext:"bookkeeper sql" filetype:json',
'intext:"distributedlog sql" filetype:json',
'intext:"flink sql" filetype:json',
'intext:"spark sql" filetype:json',
'intext:"beam sql" filetype:json',
'intext:"samza sql" filetype:json',
'intext:"storm sql" filetype:json',
'intext:"heron sql" filetype:json',
'intext:"nifi sql" filetype:json',
'intext:"streamsets sql" filetype:json',
'intext:"kafka connect sql" filetype:json',
'intext:"kafka streams sql" filetype:json',
'intext:"ksql" filetype:json',
'intext:"flink sql" filetype:json',
'intext:"spark sql" filetype:json',
'intext:"presto sql" filetype:json',
'intext:"trino sql" filetype:json',
'intext:"hive sql" filetype:json',
'intext:"impala sql" filetype:json',
'intext:"drill sql" filetype:json',
'intext:"kylin sql" filetype:json',
'intext:"druid sql" filetype:json',
'intext:"pinot sql" filetype:json',
'intext:"kudu sql" filetype:json',
'intext:"kafka sql" filetype:json',
'intext:"pulsar sql" filetype:json',
'intext:"rabbitmq sql" filetype:json',
'intext:"activemq sql" filetype:json',
'intext:"artemis sql" filetype:json',
'intext:"nats sql" filetype:json',
'intext:"nsq sql" filetype:json',
'intext:"zeromq sql" filetype:json',
'intext:"zmq sql" filetype:json',
'intext:"stan sql" filetype:json',
'intext:"jetstream sql" filetype:json',
'intext:"liftbridge sql" filetype:json',
'intext:"redpanda sql" filetype:json',
'intext:"pravega sql" filetype:json',
'intext:"bookkeeper sql" filetype:json',
'intext:"distributedlog sql" filetype:json',
]

};

const categorizedShodanDorks = {
  " Basic Network Devices":[
  'net:192.168.1.0/24',
  'net:10.0.0.0/8',
  'net:172.16.0.0/12',
  'city:"New York"',
  'country:"US"',
  'port:80',
  'port:443',
  'port:22',
  'port:21',
  'port:23',
  'port:25',
  'port:3389',
  'org:"Amazon"',
  'org:"Google"',
  'isp:"Comcast"',
  'asn:AS15169',
  'hostname:example.com',
  ],
  "Web Servers & Services":[
  'http.title:"Apache"',
  'http.title:"nginx"',
  'http.title:"IIS"',
  'http.component:"wordpress"',
  'http.html:"login"',
  'http.status:200',
  'http.status:401',
  'http.status:403',
  'http.status:404',
  'http.status:500',
  'ssl:"nginx"',
  'ssl:"Apache"',
  'ssl:"Microsoft IIS"',
  'http.favicon.hash:123456',
  'http.server:"Apache/2.4.41"',
  'http.server:"nginx/1.18.0"',
  'http.server:"Microsoft-IIS/10.0"',
  ],
  "Database Exposures":[
   'product:"MySQL"',
  'product:"PostgreSQL"',
  'product:"MongoDB"',
  'product:"Redis"',
  'product:"Elasticsearch"',
  'product:"Microsoft SQL Server"',
  'port:3306',
  'port:5432',
  'port:27017',
  'port:6379',
  'port:9200',
  'port:1433',
  '"MongoDB Server Information" port:27017',
  '"PostgreSQL" port:5432 -"authentication"',
  '"MySQL" port:3306 -"authentication"',
  '"Redis" port:6379 -"protected mode"',
  ],
  "Remote Access & Administration":[
   'product:"RDP"',
      'product:"VNC"',
      'product:"TeamViewer"',
      'product:"AnyDesk"',
      'product:"SSH"',
      'port:3389',
      'port:5900',
      'port:5800',
      'port:22',
      '"authentication disabled" port:5900',
      '"RFB 003.008" -"authentication"',
      '"realvnc" "authentication disabled"',
      '"x11vnc" "authentication disabled"',
      '"tightvnc" "authentication disabled"',
  ],
  "Industrial Control Systems (ICS)":[
    'product:"Siemens"',
      'product:"Allen-Bradley"',
      'product:"Modbus"',
      'product:"BACnet"',
      'product:"EtherNet/IP"',
      'port:502',
      'port:47808',
      'port:44818',
      'port:1911',
      'port:9600',
      '"SIEMENS SIMATIC" port:102',
      '"Rockwell" port:44818',
      '"Schneider Electric" port:502',
      '"Omron" port:9600',
      '"Mitsubishi" port:5007',
  ],
  " Cameras & IoT Devices":[
  'product:"webcamXP"',
    'product:"AXIS"',
    'product:"D-Link"',
    'product:"Hikvision"',
    'product:"Foscam"',
    '"Camera" port:80',
    '"webcam" port:8080',
    '"Live View" -"login"',
    '"IP Camera" -"password"',
    '"MJPG" port:80',
    '"video.mjpg" port:80',
    '"streaming" port:554',
    '"onvif" port:80',
    '"rtsp" port:554',
    '"hikvision" port:8000',
  ],
  "Network Infrastructure":[
   'product:"Cisco"',
    'product:"Juniper"',
    'product:"Fortinet"',
    'product:"Palo Alto"',
    'product:"Check Point"',
    '"router" port:80',
    '"switch" port:22',
    '"firewall" port:443',
    '"VPN" port:1194',
    '"WAN" port:1723',
    '"Cisco IOS" port:23',
    '"Juniper" port:22',
    '"FortiGate" port:443',
    '"Palo Alto" port:443',
    '"Check Point" port:443',
  ],
  "Cloud Services":[
    'product:"AWS"',
    'product:"Azure"',
    'product:"Google Cloud"',
    'product:"DigitalOcean"',
    'product:"Linode"',
    '"Amazon AWS" port:80',
    '"Microsoft Azure" port:443',
    '"Google Cloud" port:22',
    '"DigitalOcean" port:80',
    '"Linode" port:443',
    '"cloud" port:80',
    '"kubernetes" port:6443',
    '"docker" port:2375',
    '"rancher" port:8080',
    '"openshift" port:8443',
  ],
  "Vulnerable Services":[
  'vuln:CVE-2021-44228 (Log4j)',
    'vuln:CVE-2021-34527 (PrintNightmare)',
    'vuln:CVE-2021-26855 (ProxyShell)',
    'vuln:CVE-2020-1472 (Zerologon)',
    'vuln:CVE-2019-19781 (Citrix)',
    'vuln:CVE-2018-13379 (Fortinet)',
    'vuln:CVE-2017-0144 (EternalBlue)',
    'vuln:CVE-2014-0160 (Heartbleed)',
    '"ShellShock" port:80',
    '"EternalBlue" port:445',
    '"BlueKeep" port:3389',
    '"Citrix" port:80',
    '"Zimbra" port:7071',
    '"Exchange" port:443',
  ],
  "Industrial Protocols":[
  'protocol:"modbus"',
    'protocol:"dnp3"',
    'protocol:"bacnet"',
    'protocol:"s7"',
    'protocol:"fox"',
    'port:502',
    'port:20000',
    'port:47808',
    'port:102',
    'port:1911',
    '"Schneider Electric" port:502',
    '"Omron" port:9600',
    '"Mitsubishi" port:5007',
    '"Beckhoff" port:801',
    '"GE SRTP" port:18245',
  ],
  "Medical Devices":[
   'product:"GE Healthcare"',
    'product:"Siemens Healthineers"',
    'product:"Philips"',
    'product:"Medtronic"',
    'product:"Baxter"',
    '"PACS" port:104',
    '"DICOM" port:11112',
    '"HL7" port:2575',
    '"Medical" port:80',
    '"Imaging" port:443',
    '"Radiology" port:8080',
    '"Ultrasound" port:80',
    '"MRI" port:443',
    '"CT" port:80',
    '"X-Ray" port:443',
  ],
  "Automotive Systems":[
  'product:"Tesla"',
  'product:"BMW"',
  'product:"Mercedes"',
  'product:"Toyota"',
  'product:"Ford"',
  '"CAN bus" port:35000',
  '"OBD-II" port:35000',
  '"Automotive" port:80',
  '"Car" port:443',
  '"Vehicle" port:8080',
  '"Telematics" port:80',
  '"Infotainment" port:443',
  '"Diagnostics" port:8080',
  ],
  " Aviation & Maritime":[
    'product:"Garmin"',
  'product:"Honeywell"',
  'product:"Rockwell Collins"',
  'product:"Raytheon"',
  'product:"Thales"',
  '"ADS-B" port:30003',
  '"ACARS" port:10000',
  '"VHF" port:2000',
  '"Maritime" port:80',
  '"Aviation" port:443',
  '"AIS" port:10110',
  '"Radar" port:8080',
  '"GPS" port:2947',
  '"Flight" port:80',
  '"Ship" port:443',
  ],
  " Smart Home Devices":[
   'product:"Nest"',
  'product:"Ring"',
  'product:"SmartThings"',
  'product:"Hue"',
  'product:"TP-Link"',
  '"Smart Home" port:80',
  '"IoT" port:443',
  '"Home Automation" port:8080',
  '"Lighting" port:80',
  '"Thermostat" port:443',
  '"Security" port:8080',
  '"Camera" port:80',
  '"Doorbell" port:443',
  '"Lock" port:8080',
  '"Sensor" port:80',
  ],
  " SCADA & ICS Vulnerabilities":[
   '"SCADA" port:502',
  '"ICS" port:44818',
  '"PLC" port:102',
  '"HMI" port:80',
  '"DCS" port:443',
  '"RTU" port:8080',
  '"Historian" port:80',
  '"Wonderware" port:443',
  '"Indusoft" port:8080',
  '"iFix" port:80',
  '"WinCC" port:443',
  '"Tridium" port:8080',
  '"AVEVA" port:80',
  '"OSIsoft" port:443',
  '"GE Proficy" port:8080',
  ],
  "Financial Systems":[
    'product:"SWIFT"',
  'product:"FIX"',
  'product:"Bloomberg"',
  'product:"Reuters"',
  'product:"NASDAQ"',
  '"ATM" port:80',
  '"POS" port:443',
  '"Payment" port:8080',
  '"Bank" port:80',
  '"Trading" port:443',
  '"Exchange" port:8080',
  '"Stock" port:80',
  '"Credit" port:443',
  '"Card" port:8080',
  '"Transaction" port:80',
  ],
  " Government Systems":[
  'org:"US Army"',
  'org:"US Navy"',
  'org:"US Air Force"',
  'org:"Department of Defense"',
  'org:"NASA"',
  '"Government" port:80',
  '"Military" port:443',
  '"Defense" port:8080',
  '"Intelligence" port:80',
  '"Security" port:443',
  '"Law Enforcement" port:8080',
  '"FBI" port:80',
  '"CIA" port:443',
  '"NSA" port:8080',
  '"Pentagon" port:80',
  ],
  " Educational Systems":[
    'org:"Harvard University"',
  'org:"Stanford University"',
  'org:"MIT"',
  'org:"University of California"',
  'org:"University of Texas"',
  '"Education" port:80',
  '"School" port:443',
  '"University" port:8080',
  '"College" port:80',
  '"Student" port:443',
  '"Library" port:8080',
  '"Research" port:80',
  '"Academic" port:443',
  '"Learning" port:8080',
  '"Course" port:80',
  ],
  "Retail Systems":[
  'org:"Walmart"',
  'org:"Amazon"',
  'org:"Target"',
  'org:"Best Buy"',
  'org:"Home Depot"',
  '"Retail" port:80',
  '"Store" port:443',
  '"Shopping" port:8080',
  '"POS" port:80',
  '"Checkout" port:443',
  '"Inventory" port:8080',
  '"Warehouse" port:80',
  '"Supply Chain" port:443',
  '"Logistics" port:8080',
  '"Distribution" port:80',
  ]
};

const dorkCategories = [
  {
    name: "📸 Cameras",
    google: [
      'intitle:"Live View / - AXIS"',
      'inurl:view/view.shtml',
      'inurl:":8080" intext:"camera"',
    ],
    shodan: [
      'product:"Axis" port:80',
      'title:"Live View" http.html:"camera"',
      'port:8080 has_screenshot:true',
    ],
  },
  {
    name: "🔐 Login Pages",
    google: [
      'intitle:"Login Page"',
      'inurl:/admin/login.php',
      'inurl:/userlogin.jsp',
    ],
    shodan: [
      'title:"Login"',
      'http.html:"Admin Login"',
      'port:443 http.title:"Sign in"',
    ],
  },
  {
    name: "📁 Sensitive Files",
    google: [
      'intitle:index.of passwd',
      'ext:sql | ext:dbf | ext:mdb',
      'ext:log inurl:"password"',
    ],
    shodan: [
      'http.html:"password" port:80',
      'ftp "Index of /"',
      'port:21 "login"',
    ],
  },
  {
    name: "💻 Devices",
    google: [
      'intitle:"webcamXP 5"',
      'intitle:"IP Camera Viewer"',
      'inurl:top.htm inurl:currenttime',
    ],
    shodan: [
      'product:"webcamXP"',
      'title:"IP Camera Viewer"',
      'http.html:"current time"',
    ],
  },
  {
    name: "🚨 Errors & Exposures",
    google: [
      '"PHP Parse error" | "PHP Warning" | "PHP Error"',
      'intitle:"Index of /" "parent directory"',
      'intext:"sql syntax near" inurl:index.php?id=',
    ],
    shodan: [
      'http.html:"php error"',
      'title:"Index of /"',
      'http.html:"sql syntax error"',
    ],
  },
];

export default function App() {
  const [selectedEngine, setSelectedEngine] = useState("Google");
  const [siteUrl, setSiteUrl] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDork, setSelectedDork] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleDorkClick = (dork) => {
    let baseUrl, query;
    
    if (selectedEngine === "Google") {
      baseUrl = "https://www.google.com/search?q=";
      query = siteUrl ? `${dork} site:${siteUrl}` : dork;
    } else {
      baseUrl = "https://www.shodan.io/search?query=";
      query = dork; // Shodan doesn't use "site:" operator
      if (siteUrl) {
        query = `hostname:${siteUrl} ${dork}`;
      }
    }
    
    window.open(`${baseUrl}${encodeURIComponent(query)}`, "_blank");
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      handleDorkClick(searchTerm);
    }
  };

  const handleDorkSelect = (e) => {
    const dork = e.target.value;
    setSelectedDork(dork);
    if (dork) {
      handleDorkClick(dork);
    }
  };

  const currentCategories = selectedEngine === "Google" 
    ? categorizedGoogleDorks 
    : categorizedShodanDorks;

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center ">
          🕵️‍♂️ Dorking Tool
        </h1>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search keyword or dork manually"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="w-full px-4 py-3 mb-4 rounded bg-gray-800 border border-gray-700"
        />

        {/* Search Button */}
        <div className="flex justify-center mb-6">
          <button
            onClick={handleSearch}
            className="px-6 py-2 bg-purple-600 rounded hover:bg-purple-700"
          >
            Search with {selectedEngine}
          </button>
        </div>

        {/* Engine Select */}
        <div className="flex gap-4 mb-4 justify-center">
          <button
            onClick={() => {
              setSelectedEngine("Google");
              setSelectedCategory("");
              setSelectedDork("");
            }}
            className={`px-6 py-2 rounded ${
              selectedEngine === "Google"
                ? "bg-blue-600"
                : "bg-gray-800 border border-gray-700"
            }`}
          >
            Google Dorking
          </button>
          <button
            onClick={() => {
              setSelectedEngine("Shodan");
              setSelectedCategory("");
              setSelectedDork("");
            }}
            className={`px-6 py-2 rounded ${
              selectedEngine === "Shodan"
                ? "bg-green-600"
                : "bg-gray-800 border border-gray-700"
            }`}
          >
            Shodan Dorking
          </button>
        </div>

        {/* Site URL */}
        <input
          type="text"
          placeholder={selectedEngine === "Google" 
            ? "Optional: site URL (example.com)" 
            : "Optional: hostname (example.com)"}
          value={siteUrl}
          onChange={(e) => setSiteUrl(e.target.value)}
          className="w-full px-4 py-2 mb-4 rounded bg-gray-800 border border-gray-700"
        />

        {/* Category Selection */}
        <div className="mb-4">
          <label className="block mb-2 text-yellow-400">
            Select Category:
          </label>
          <select
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setSelectedDork("");
            }}
            value={selectedCategory}
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700"
          >
            <option value="">Select a category...</option>
            {Object.keys(currentCategories).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Dorks Dropdown */}
        {selectedCategory && (
          <div className="mb-8">
            <label className="block mb-2 text-yellow-400">
              Select {selectedEngine} Dork:
            </label>
            <select
              onChange={handleDorkSelect}
              value={selectedDork}
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700"
            >
              <option value="">Select a dork...</option>
              {currentCategories[selectedCategory].map((dork, index) => (
                <option key={index} value={dork}>
                  {dork}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Dork Categories */}
        <div>
          {dorkCategories.map((category, idx) => (
            <div key={idx} className="mb-6">
              <h2 className="text-xl font-semibold text-yellow-400 mb-2">
                {category.name}
              </h2>
              <ul className="list-disc list-inside">
                {(selectedEngine === "Google"
                  ? category.google
                  : category.shodan
                ).map((dork, index) => (
                  <li
                    key={index}
                    className="mb-1 text-blue-400 hover:underline cursor-pointer"
                    onClick={() => handleDorkClick(dork)}
                  >
                    {dork}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
