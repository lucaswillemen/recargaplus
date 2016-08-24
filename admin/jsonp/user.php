<?php

// DataTables PHP library and database connection
include( "lib/DataTables.php" );

// Alias Editor classes so they are easy to use
use
	DataTables\Editor,
	DataTables\Editor\Field,
	DataTables\Editor\Format,
	DataTables\Editor\Join,
	DataTables\Editor\Upload,
	DataTables\Editor\Validate;


// Build our Editor instance and process the data coming from _POST
Editor::inst( $db, 'user', 'id' )
	->fields(
		Field::inst( 'id' ),
		Field::inst( 'nome' ),
		Field::inst( 'img' ),
		Field::inst( 'fb_id' )
	)
	->process( $_GET )
	->jsonp();
