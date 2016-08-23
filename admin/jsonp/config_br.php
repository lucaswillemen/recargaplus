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
Editor::inst( $db, 'config', 'id' )
	->fields(
		Field::inst( 'titulo' ),
		Field::inst( 'link' ),
		Field::inst( 'link2' ),
		Field::inst( 'desc' ),
		Field::inst( 'img' ),
		Field::inst( 'tag' )
	)
	->process( $_GET )
	->jsonp();
