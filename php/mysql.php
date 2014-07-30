<?


class mysqlconn{
	var $server;
	var $user_sql;
	var $pass_sql;
	var $bd;

function mysqlconn(){

	$this->server = "db.humbertolopez.info";
	$this->user_sql = "utopic";
	$this->pass_sql = "beto15";
	$this->bd = "humbertolopez";

}

function conectar(){
	$link = mysql_connect($this->server, $this->user_sql, $this->pass_sql);
	mysql_select_db($this->bd, $link);
	mysql_query("SET NAMES utf8",$link);
	return $link;
}

function desconectar(){
	mysql_close(0);
	
}
}