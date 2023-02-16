class Dog:
    """ create new class"""
    def __init__(self, name, age):
        self.name = name
        self.age = age
        print('Dog is create')
        print('______________')
    def seat(self):
        """ create methods seat & jump"""
        print(self.name + ' is seating')

    def jump(self):
        print(self.name + ' is jumping')

    def gav(self):
        print(self.name + ': - "Gav - Gav!!"')
