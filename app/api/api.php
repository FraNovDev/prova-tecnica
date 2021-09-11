<?php

use controllers\AppController;

include_once '../controllers/AppController.php';

header('Content-Type: application/json; charset=utf-8');

try {
    $postData = json_decode(file_get_contents('php://input'), true, JSON_THROW_ON_ERROR);
    if (isset($postData['action'])) {
        $appController = new AppController();
        switch ($postData['action']) {
            case 'items':
                returnContent($appController->getItems());
                break;
            case 'stores':
                returnContent($appController->getSortedStores($postData['id']));
                break;
        }
    }
} catch (Exception $e) {
    http_response_code(500);
}

/**
 * @param array $content
 */
function returnContent(array $content)
{
    echo json_encode($content, true);
}
