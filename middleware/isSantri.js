export default function({ $auth, redirect }) {

    //check loggedIn "false"
    if(!$auth.loggedIn) {
        return redirect('/pendaftaran/login')
    }

    //check pendaftaran role
    if($auth.strategy.name != "santribaru") {
        return redirect('/pendaftaran/login')
    } else {
        return
    }

}