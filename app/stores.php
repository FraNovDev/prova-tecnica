<?php

namespace models;


/**
 * This is the model class for table "feeds" of Monitor pay.
 *
 * @property string $dataPath
 * @property array $stores
 */

class Stores
{
    private static $dataPath = "/data/stores.json";
    private static $stores = [];

    public function __construct()
    {
        static::$stores = json_decode(file_get_contents(dirname(__FILE__) . static::$dataPath), true);
    }
    public function getStoresBelowMinimum(int $id)
    {
        $result = [];
        foreach (static::$stores as $store) {
            foreach ($store['items'] as $item) {
                if ($item['id'] == $id && $item['qty'] < $item['minQty']) {
                    $result[$store['id']]['storeName'] = $store['name'];
                    $result[$store['id']]['distance'] = $store['distance'];
                    $result[$store['id']]['item'] = $item;
                }
            }
        }
        usort($result, [$this, 'sortStores']);
        return $result;
    }
    private static function sortStores($a, $b)
    {
        if ($a['distance'] == $b['distance']) {
            return $b['item']['qty'] - $a['item']['qty'];
        } else {
            return $a['distance'] - $b['distance'];
        }
    }
}
$stores = new Stores();
$ok = $stores->getStoresBelowMinimum(5);
