<?php

namespace App\Http\Controllers\Api;

use App\Booking;
use App\Http\Controllers\Controller;
use App\Http\Resources\BookingByReviewShowResource;
use Illuminate\Http\Request;

class BookingByReviewController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke($reviewKey, Request $request)
    {
		$booking = Booking::findByReviewKey($reviewKey) ?? null;
		if($booking){
			return new BookingByReviewShowResource($booking);
		}
		else{
			return 	abort(404);
		}
    }
}