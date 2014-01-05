<?php

require_once __DIR__.'/../vendor/autoload.php';

$app = new Silex\Application();
$app->register(new Silex\Provider\SessionServiceProvider());
$app->register(new Silex\Provider\SecurityServiceProvider());

$app['security.firewalls'] = array(
    'admin' => array(
        'pattern' => '^/admin',
        'http' => true,
        'users' => array(
            // raw password is foo
            'admin' => array('ROLE_ADMIN', '5FZ2Z8QIkA7UTZ4BYkoC+GsReLf569mSKDsfods6LYQ8t+a8EW9oaircfMpmaLbPBh4FOBiiFyLfuZmTSUwzZg=='),
        ),
    ),
);

function unauthorized(){
    return new \Symfony\Component\HttpFoundation\Response("Unauthorized user", 401);
}

$app->get('/user', function(\Symfony\Component\HttpFoundation\Request $req) use ($app){

    return unauthorized();
});

$app->post('/login', function(\Symfony\Component\HttpFoundation\Request $req) use ($app){

    $username = $req->get('username');
    $password = $req->get('password');

    if($username == 'admin' && $password == 'admin'){
        $app['session']->set('user', array('username'=>'admin'));
        return new \Symfony\Component\HttpFoundation\Response('OK', 200);
    }

    return new \Symfony\Component\HttpFoundation\Response('Invalid', 400);
});

$app->run();
