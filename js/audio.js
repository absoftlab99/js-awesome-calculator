function audioId(id){
    document.getElementById(id).addEventListener('click', function(){
        var audio = new Audio('./audios/audio2.wav');
    
        audio.oncanplaythrough = function(){
        audio.play();
        }
    })
}
audioId('dot'); audioId('zeroo'); audioId('one'); audioId('two'); audioId('three'); audioId('four');
audioId('five'); audioId('six'); audioId('seven'); audioId('eight'); audioId('nine');

function audioId2(id){
    document.getElementById(id).addEventListener('click', function(){
        var audio = new Audio('./audios/audio1.wav');
    
        audio.oncanplaythrough = function(){
        audio.play();
        }
    })
}
audioId2('division'); audioId2('multi'); audioId2('sub'); audioId2('add');

function audioId3(id){
    document.getElementById(id).addEventListener('click', function(){
        var audio = new Audio('./audios/audio3.wav');
    
        audio.oncanplaythrough = function(){
        audio.play();
        }
    })
}
audioId3('equal');

function audioId4(id){
    document.getElementById(id).addEventListener('click', function(){
        var audio = new Audio('./audios/audio4.wav');
    
        audio.oncanplaythrough = function(){
        audio.play();
        }
    })
}
audioId4('delete');

function audioId5(id){
    document.getElementById(id).addEventListener('click', function(){
        var audio = new Audio('./audios/audio5.wav');
    
        audio.oncanplaythrough = function(){
        audio.play();
        }
    })
}
audioId5('clear');