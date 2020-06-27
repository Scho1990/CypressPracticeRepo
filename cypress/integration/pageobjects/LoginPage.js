class LoginPage{

    getUsernameTxtbox(){
        return cy.get("input[name='username']")
    }
    getPasswordTxtbox(){
        return cy.get("input[name='password']")
    }
    getLoginBtn(){
        return cy.get("input[value='Login']")
    }
    
    
    doInputUserName(username){
        this.getUsernameTxtbox().type(username)
    }
    doInputPassword(password){
        this.getPasswordTxtbox().type(password)
    }
    doLoginClick(){
        this.getLoginBtn().click()
    }
    doLogin(username,password){
        this.doInputUserName(username)
        this.doInputPassword(password)
        this.doLoginClick()
    }
    doClickOnLevel1Menu(menu){
        const first = `a[title=`
        const second = menu
        const third =`]`
        return cy.get(first+second+third)
    }
}
export default LoginPage