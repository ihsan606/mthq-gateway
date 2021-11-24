export default function({ $auth, redirect }) {

    //check loggedIn "false"
    if(!$auth.loggedIn) {
        return redirect('/wali/login')
    }

    //check wali role
    if($auth.strategy.name != "wali") {
        return redirect('/wali/login')
    } else {
        return
    }

}