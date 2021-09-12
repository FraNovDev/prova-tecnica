<?php

namespace models;

/**
 * This is the model class for "items"
 *
 * @property string $dataPath
 * @property array $items
 */
class Items
{
    private static $dataPath = "/../data/items.json";
    private static $items = [];

    public function __construct()
    {
        static::$items = json_decode(file_get_contents(dirname(__FILE__) . static::$dataPath), true);
    }

    /**
     * @return array
     */
    public function getItems(): array
    {

        return static::$items;
    }
}