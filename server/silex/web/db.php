<?php

$app->register(new Silex\Provider\DoctrineServiceProvider(), array(
    'db.options' => array(
        'driver' => 'pdo_sqlite',
        'path' => __DIR__ . '/../data/app.db',
    ),
));
$schema = $app['db']->getSchemaManager();
if (!$schema->tablesExist('user')) {
    $user = new \Doctrine\DBAL\Schema\Table('user');

    $user->addColumn('id', 'integer', array('unsigned' => true, 'autoincrement' => true));
    $user->setPrimaryKey(['id']);
    $user->addColumn('name', 'string');
    $user->addColumn('age', 'decimal');


    $schema->createTable($user);
}