
describe('POST /characters', () => {

    before(() => {
        cy.setToken()
        cy.back2ThePast()

    });
    it('deve cadastrar um personagem', () => {
        
        const character = {
            name:'Wanda Maximoff',
            alias:'Feiticeira Escarlat',
            team:['Avangers'],
            active: true
        }

        cy.request({
            method: 'POST',
            url: 'https://marvel-qa-cademy.herokuapp.com/characters',
            headers: {
                Authorization: Cypress.env('token')
            },
            body: character
        }).then(function(response){
            expect(response.status).to.eql(201)
        })
    });
});

