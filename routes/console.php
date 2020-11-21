<?php

use App\Libraries\GmailService;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

/*
|--------------------------------------------------------------------------
| Console Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of your Closure based console
| commands. Each Closure is bound to a command instance allowing a
| simple approach to interacting with each command's IO methods.
|
*/

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

Artisan::command('daily:automation', function () {
    GmailService::listenAutomations();
})->purpose('call services');

Artisan::command('daily:service {service} {userId} {automationId}', function ($service, $userId, $automationId) {
    GmailService::$service($userId, $automationId);
})->purpose('call services');
