<?php

namespace controllers;

include_once '../models/Items.php';
include_once '../models/Stores.php';

use models\Items;
use models\Stores;

class AppController
{
    /**
     * @return array
     */
    public function getItems(): array
    {
        $items = new Items();
        return $items->getItems();
    }

    /**
     * @param int $id
     * @return array
     */
    public function getSortedStores(int $id): array
    {
        $stores = new Stores();
        $result = $stores->getStoresBelowMinimum($id);
        usort($result, [$this, 'sortStores']);
        return $result;
    }

    /**
     * @param $a
     * @param $b
     * @return mixed
     */
    private static function sortStores($a, $b)
    {
        if ($a['distance'] == $b['distance']) {
            return $b['item']['qty'] - $a['item']['qty'];
        } else {
            return $a['distance'] - $b['distance'];
        }
    }
}
