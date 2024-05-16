<?php

// function eliminarVideojuego($id)
// {
//     $bd = obtenerConexion();
//     $sentencia = $bd->prepare("DELETE FROM videojuegos WHERE id = ?");
//     return $sentencia->execute([$id]);
// }

function updateUser($userInfo)
{
    $bd = getConexion();
    $stmt = $bd->prepare("UPDATE users SET user = ? WHERE id = ?");
    return $stmt->execute([$userInfo->name, $userInfo->id]);
}

function getUserById($id)
{
    $bd = getConexion();
    $stmt = $bd->prepare("SELECT id, name, password FROM users WHERE id = ?");
    $stmt->execute([$id]);
    return $stmt->fetchObject();
}

function getUsers()
{
    $bd = getConexion();
    $stmt = $bd->query("SELECT id, name, password FROM users");
    return $stmt->fetchAll();
}

function saveUser($userInfo)
{
    $bd = getConexion();
    $stmt = $bd->prepare("INSERT INTO users(name, password) VALUES (?, ?)");
    return $stmt->execute([$userInfo->name, $userInfo->password]);
}

function getVarEnviroment($key)
{
    if (defined("_ENV_CACHE")) {
        $vars = _ENV_CACHE;
    } else {
        $file = "env.php";
        if (!file_exists($file)) {
            throw new Exception("The environment variables file ($file) doesn't exist. Please Create it");
        }
        $vars = parse_ini_file($file);
        define("_ENV_CACHE", $vars);
    }
    if (isset($vars[$key])) {
        return $vars[$key];
    } else {
        throw new Exception("The key (" . $key . ") doesn't exist in the environment variables file");
    }
}
function getConexion()
{
    $password = getVarEnviroment("MYSQL_PASSWORD");
    $user = getVarEnviroment("MYSQL_USER");
    $dbName = getVarEnviroment("MYSQL_DATABASE_NAME");
    $database = new PDO('mysql:host=localhost;dbname=' . $dbName, $user, $password);
    $database->query("set names utf8;");
    $database->setAttribute(PDO::ATTR_EMULATE_PREPARES, FALSE);
    $database->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $database->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
    return $database;
}