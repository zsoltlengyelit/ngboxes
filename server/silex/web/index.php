<?php

require_once __DIR__ . '/../vendor/autoload.php';

$app = new Silex\Application();
$app->register(new Silex\Provider\SessionServiceProvider());

require_once 'db.php';

$app->before(function (\Symfony\Component\HttpFoundation\Request $request) {
    if (0 === strpos($request->headers->get('Content-Type'), 'application/json')) {
        $data = json_decode($request->getContent(), true);
        $request->request->replace(is_array($data) ? $data : array());
    }
});


function unauthorized()
{
    return new \Symfony\Component\HttpFoundation\Response("Unauthorized user", 401);
}

$app->before(function (\Symfony\Component\HttpFoundation\Request $req) use ($app){

    if($req->attributes->get('_route') == 'POST_login') return;

    $user = $app['session']->get('user');
    if (!$user) {
        return unauthorized();
    }
});

class User
{
    public $name;
    public $age;

    public function __construct($name, $age)
    {
        $this->name = $name;
        $this->age = $age;
    }
}

$app->get('/user', function (\Symfony\Component\HttpFoundation\Request $req) use ($app) {
    $sql = "SELECT * FROM user";
    $result = $app['db']->fetchAll($sql);

    return $app->json($result);
});

$app->post('/user', function (\Symfony\Component\HttpFoundation\Request $req) use ($app) {
    $name = $req->get('name');
    $age = $req->get('age');

    $data = ['name' => $name, 'age' => $age];
    $app['db']->insert('user', $data);

    return $app->json($data);
});

$app->post('/user/{id}', function (\Symfony\Component\HttpFoundation\Request $req, $id) use ($app) {
    $name = $req->get('name');
    $age = $req->get('age');

    $data = ['name' => $name, 'age' => $age];
    $app['db']->update('user', $data, ['id' => $id]);

    return $app->json($data);
});

$app->delete('/user/{id}', function ($id) use ($app) {

    $app['db']->delete('user', ['id' => (int)$id]);

    return $id;
});

$app->get('/user/{id}', function ($id) use ($app) {

    $sql = "SELECT * FROM user WHERE id = ?";
    $user = $app['db']->fetchAssoc($sql, array((int)$id));

    return $app->json($user);
});

$app->get('/logout', function () use ($app) {
    $app['session']->set('user', false);

    return 'OK';
});

$app->post('/login', function (\Symfony\Component\HttpFoundation\Request $req) use ($app) {

    $username = $req->get('username');
    $password = $req->get('password');

    if ($username == 'admin' && $password == 'admin') {
        $app['session']->set('user', array('username' => 'admin'));
        return new \Symfony\Component\HttpFoundation\Response('OK', 200);
    }

    return new \Symfony\Component\HttpFoundation\Response('Invalid username / password', 400);
});

$app->run();
