<?php

namespace App\Http\Controllers\Api\Customer;

use App\Models\Address;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;

use App\Http\Resources\AddressResource;

class AddressController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | List Addresses
    |--------------------------------------------------------------------------
    */

    public function index(Request $request)
    {
        $addresses = Address::where(
            'user_id',
            $request->user()->id
        )
        ->latest()
        ->get();


        return response()->json([

            'success' => true,

            'data' => AddressResource::collection($addresses)

        ]);
    }


    /*
    |--------------------------------------------------------------------------
    | Add Address
    |--------------------------------------------------------------------------
    */

    public function store(Request $request)
    {
        $request->validate([

            'full_name' => 'required|string|max:255',

            'phone' => 'required|string|max:20',

            'address_line_1' => 'required|string',

            'city' => 'required|string',

            'state' => 'required|string',

            'postal_code' => 'required|string',
        ]);


        /*
        |--------------------------------------------------------------------------
        | Handle Default Address
        |--------------------------------------------------------------------------
        */

        if ($request->is_default) {

            Address::where(
                'user_id',
                $request->user()->id
            )->update([
                'is_default' => false
            ]);
        }


        $address = Address::create([

            'user_id' => $request->user()->id,

            'full_name' => $request->full_name,

            'phone' => $request->phone,

            'address_line_1' => $request->address_line_1,

            'address_line_2' => $request->address_line_2,

            'city' => $request->city,

            'state' => $request->state,

            'country' => $request->country ?? 'India',

            'postal_code' => $request->postal_code,

            'is_default' => $request->is_default ?? false,
        ]);


        return response()->json([

            'success' => true,

            'message' => 'Address added successfully',

            'data' => new AddressResource($address)

        ], 201);
    }


    /*
    |--------------------------------------------------------------------------
    | Update Address
    |--------------------------------------------------------------------------
    */

    public function update(Request $request, $id)
    {
        $address = Address::where(
            'user_id',
            $request->user()->id
        )
        ->find($id);


        if (!$address) {

            return response()->json([

                'success' => false,

                'message' => 'Address not found'

            ], 404);
        }


        if ($request->is_default) {

            Address::where(
                'user_id',
                $request->user()->id
            )->update([
                'is_default' => false
            ]);
        }


        $address->update($request->all());


        return response()->json([

            'success' => true,

            'message' => 'Address updated successfully',

            'data' => new AddressResource($address)

        ]);
    }


    /*
    |--------------------------------------------------------------------------
    | Delete Address
    |--------------------------------------------------------------------------
    */

    public function destroy(Request $request, $id)
    {
        $address = Address::where(
            'user_id',
            $request->user()->id
        )
        ->find($id);


        if (!$address) {

            return response()->json([

                'success' => false,

                'message' => 'Address not found'

            ], 404);
        }


        $address->delete();


        return response()->json([

            'success' => true,

            'message' => 'Address deleted successfully'

        ]);
    }
}