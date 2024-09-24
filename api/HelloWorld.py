from flask_restful import Resource

class HelloWorld(Resource):
    def get(self):
        return {
            'greeting1': 'hello world',
            'greeting2': 'hello world2'
        }