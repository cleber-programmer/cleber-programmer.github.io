Rex(function ({ atom, getHotels }) {

  @atom.component('evnts-hotel', 'main')
  class Hotel {

    @atom.attached
    async render() {
      this.innerHTML = template(await getHotels()[++query().id]);
    }

  }

});