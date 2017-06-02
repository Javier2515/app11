// JavaScript Document<script>
document.addEventListener("deviceready", loaded, false);
function loaded(){
alert("device is ready");
};
  function MamWorkDone(){
	navigator.notification.confirm("¿Que quieres hacer?",function(opt){
		switch(opt)
		{
			case 1:
			navigator.notification.beep(2);
			break;
			
			case 2:
			navigator.notification.vibrate(1000);
			break;
		}
	},"Aplicaion7","Beep,Vibrar,Cancelar");
  };

