const errorText = {

    show: function(id){
        document.getElementById(id).style.visibility = 'visible'
    },
    
    hide: function(){
        let erorsTextArr = document.getElementsByClassName('error-text');

        for ( let p of erorsTextArr){
            p.style.visibility = 'hidden'
        }
    }
}

export default errorText