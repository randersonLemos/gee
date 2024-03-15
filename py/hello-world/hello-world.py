import ee


ee.Authenticate()


ee.Initialize(project='ee-randersonlemos')


print(ee.String('Hello from the Earth Engine servers!').getInfo())
