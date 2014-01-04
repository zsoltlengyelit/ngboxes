<?php

require_once __DIR__.'/../vendor/autoload.php';

$app = new Silex\Application();
$app->register(new Silex\Provider\SessionServiceProvider());

$app->post('/login', function(\Symfony\Component\HttpFoundation\Request $req) use ($app){

    $username = $req->get('username');
    $password = $req->get('password');

    if($username == 'admin' && $password == 'admin'){

        $app['session']->set('user', array('username'=>'admin'));

        return new \Symfony\Component\HttpFoundation\Response('OK', 200);
    }

    return new \Symfony\Component\HttpFoundation\Response("Failed: $username - $password", 401);
});

$app->run();
