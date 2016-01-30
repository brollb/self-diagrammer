-- This file defines Dogs, HerdingDogs, BorderCollies and Retrievers
Dog = {}

function Dog:new () 
    local dog = {}
    self.__index = self;
    return setmetatable(dog, self)
end

function Dog:bark()
    print "bark!"
end

-- Subclassing dog...
HerdingDog = Dog:new()

function HerdingDog:new()
    local dog = {}
    self.__index = self;
    return setmetatable(dog, self)
end

function HerdingDog:herd()
    print "herding things!"
end

BorderCollie = HerdingDog:new()

Retriever = Dog:new()

function Retriever:retrieve(stick)
    print "retrieving stick"
end
