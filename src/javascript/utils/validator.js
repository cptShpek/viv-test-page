import errorText from './error-text'

const validator = {

    isEmpty () {
        var chek = 0;

        let dataArr = document.getElementById('form-reg').getElementsByTagName( 'input' );


        for ( let name of dataArr ) {

            if ( !name.value ) {
                errorText.show(name.id + "-error")
                chek += 1;
                continue
            };

            if (chek > 0) return false

        };
        
        if ( !this.name () ) {

            return false

        };

        return true;
        
    },
    
    name: function(){
        if ( typeof ( document.getElementById( "name" ).value ) != 'string' ) {

            return alert ( 'Only letters at "First Name" field!' );

        };

        if ( !this.phone() ) {
            errorText.show("name-error")
            return false

        };

        return true;
    },

    phone: function(){
        if ( typeof( +document.getElementById( "phone" ).value ) != 'number' ) {

            alert ( 'Only numbers at "Phone" field!' );
            errorText.show("phone-error")
            return false;

        };

        if ( !this.email() ) {
        
            return false;

        };
        
        return true;
    },

    email () {

        if ( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( document.getElementById( 'email' ).value ) ) {
          
          return true;

        }

        errorText.show("email-error")
        return false;
    },

    init: function(){
        if (this.isEmpty()) {
            errorText.hide()
            return true
        }
    }
}

export default validator