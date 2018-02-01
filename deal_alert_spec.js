
 const usrName='kargoqa@gmail.com'
 const usrPassoword='K@rgo123!'
 const url='http://deal-alerts.staging.kargo.com/alerts'
 const auth= 'auth_key'
 const auth_value='Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJjcmVhdGl2ZS1zbmlwcGV0LnByb2Qua2FyZ28uY29tIiwiZXhwIjozMDU5ODU2MDAwMDAwLCJpc3N1ZWQiOjE0ODMxMTY5NTE4NzQsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJjaWQiOiJzZXJ2aWNlIiwiYXBwTmFtZSI6ImNyZWF0aXZlLXNuaXBwZXQifQ.Zg-VXZQfoKbd98uFEuzNE13lDKzIsGj-d2YLhJ1wVVzO_samxBq4pIjWhSy6jCaDJ1D1oCzyKyJy2SErfSvKmhS5qr6jpwxYmiq3nPDpYB0v8fIAD6-6YFNZ0zUX165-Q1cJEXY8dvzx--p1NBVQQyWRQ_yCLHeSw3T9-71LTIxxmR22zllwOmLIml_K01S9P05y48V85r9k9Y4kBESfv86rmv6gI5zc9GljfZ5FuveMdzCPZhmCiz3WUwCUUaBxQ75FU8hk8QzwDeOzRv3tzWco06w9-xL9Xezg20D5onfOFgwafeyujGPdpVIFWAmIFXZQytRIJO1xl2YhUv43bQ'

describe('Deal Alert UI Integration Test', function() 


{
  it('Navigating to Deal Alert Page', function() 
  {
    cy.visit(url)
  })


  it('Verify Login Page ', function() 
  {
  	cy.contains('Sign In')

 
  })

 


  it('Verify User is able to Login to the deal-alert site ', function() 
   {
  cy.get('input[name="username"]').type(usrName).should('have.value', usrName )
  cy.get('input[name="password"]').type(usrPassoword).should('have.value', usrPassoword)
  

  cy.get('button').click()
  cy.setCookie(auth,auth_value)
 
   })
   

   
 it('Deal Alert Dashboard', function()
   {
   	cy.contains('Deal Alerts Dashboard')
	cy.setCookie(auth,auth_value) 
   })



   it('Verify URL Should have /alerts ', function() 
  {
    
    cy.url()                      
    .should('include', '/alerts') 

cy.request(url).then((response) => {
  expect(response.status).to.eq(200)

})


     cy.setCookie(auth,auth_value)
 


})

  


it('Click on a Alert', function()
   {
  
     cy

     	.get('Deal Stopped').click()


   })

it('Take screenshot of the activity Page', function()
   {
  
cy.screenshot()

   })


})



