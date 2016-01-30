FirstCreature = {}
function FirstCreature:new()
    local car = {}
    self.__init = self
    return setmetatable(car, self)
end

Monkey = FirstCreature:new()
Feline = FirstCreature:new()
Fish = FirstCreature:new()

function Monkey:new()
    local car = {}
    self.__init = self
    return setmetatable(car, self)
end

function Feline:new()
    local car = {}
    self.__init = self
    return setmetatable(car, self)
end

function Fish:new()
    local car = {}
    self.__init = self
    return setmetatable(car, self)
end

-- Children
Flounder = Fish:new()
Oscar = Fish:new()
Goldfish = Fish:new()
Swordfish = Fish:new()

Cheetah = Feline:new()
Lion = Feline:new()
Panther = Feline:new()

Gorilla = Monkey:new()
function Gorilla:new()
    local thing = {}
    self.__init = self
    return setmetatable(thing, self)
end

SilverBack = Gorilla:new()
MountainGorilla = Gorilla:new()
