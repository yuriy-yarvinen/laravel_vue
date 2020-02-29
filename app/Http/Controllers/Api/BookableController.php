<?php

namespace App\Http\Controllers\Api;

use App\Bookable;
use App\Http\Controllers\Controller;
use App\Http\Resources\BookableIndexResourse;
use App\Http\Resources\BookableShowResourse;

class BookableController extends Controller
{
	public function index()
    {
		return BookableIndexResourse::collection(Bookable::all());
    }

    public function show($id)
    {
        return new BookableShowResourse(Bookable::findOrFail($id));
    }
}
