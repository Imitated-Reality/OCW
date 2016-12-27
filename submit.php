<!DOCTYPE html>
  <html>
    <head>
      <!--Import Google Icon Font-->
      <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Import materialize.css-->
      <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
	  <link type="text/css" rel="stylesheet" href="style.css" />	
		
      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>

<?php 
	/*$myFile = "config.json";
	$arr_data = array();*/
	
		$formdata = array( 'username' => $_POST['uname'],
		'password' => $_POST['upass'],
		'ssid' => $_POST['id'],
		'passkey' => $_POST['pass']);
		
		

		$fp = fopen("config.json", "w");
		fwrite($fp, json_encode($formdata));
		fclose($fp);
		
		/*array_push($arr_data,$formdata);
		$jsondata = json_encode($arr_data,JSON_PRETTY_PRINT);
		if(file_put_contents($myFile,$jsondata))
		{
			echo 'Data successfully saved';
		}
		else
		 echo 'error';*/
		 
	
	
?>


    <body>
		
		<div class="submit" align="center">
			<p>Config file is generated successfully </p>
			<p>System will restart soon !</p>
			<p>Thank You....</p>
			<div id="block_1" class="barlittle"></div>
			<div id="block_2" class="barlittle"></div>
			<div id="block_3" class="barlittle"></div>
			<div id="block_4" class="barlittle"></div>
			<div id="block_5" class="barlittle"></div>
			
		</div>	
		

      <!--Import jQuery before materialize.js-->
      <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
      <script type="text/javascript" src="js/materialize.min.js"></script>
    </body>
  </html>
