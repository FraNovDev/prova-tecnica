<?php

namespace models;

/**
 * This is the model class for "stores"
 *
 * @property string $dataPath
 * @property array $stores
 */
class Stores
{
    private static $dataPath = "/../data/stores.json";
    private static $stores = [];

    public function __construct()
    {
        static::$stores = json_decode(file_get_contents(dirname(__FILE__) . static::$dataPath), true);
    }

    /**
     * @param int $id
     * @return array
     */
    public function getStoresBelowMinimum(int $id): array
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
        return $result;
    }

}