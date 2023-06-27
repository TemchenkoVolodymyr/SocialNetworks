


class NewComp{
    #privat
    getPrivat() {
        return this.#privat ;
    }
    setPrivat(privat){
        this.#privat = privat;
    }

}

let x = new NewComp();
x.setPrivat("sdsd")
x.getPrivat()


