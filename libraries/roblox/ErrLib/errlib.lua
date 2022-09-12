local library = {}

local TweenService = game:GetService("TweenService")
local TextService = game:GetService("TextService")
local UserInputService = game:GetService("UserInputService")

function dragify(Frame)
    local dragToggle = nil
    local dragSpeed = .25
    local dragInput = nil
    local dragStart = nil
    local dragPos = nil

    function updateInput(input)
        Delta = input.Position - dragStart
        Position = UDim2.new(startPos.X.Scale, startPos.X.Offset + Delta.X, startPos.Y.Scale, startPos.Y.Offset + Delta.Y)
        game:GetService("TweenService"):Create(Frame, TweenInfo.new(.25), {Position = Position}):Play()
    end

    Frame.InputBegan:Connect(function(input)
        if (input.UserInputType == Enum.UserInputType.MouseButton1 or input.UserInputType == Enum.UserInputType.Touch) then
            dragToggle = true
            dragStart = input.Position
            startPos = Frame.Position
            input.Changed:Connect(function()
                if (input.UserInputState == Enum.UserInputState.End) then
                    dragToggle = false
                end
            end)
        end
    end)

    Frame.InputChanged:Connect(function(input)
        if (input.UserInputType == Enum.UserInputType.MouseMovement or input.UserInputType == Enum.UserInputType.Touch) then
            dragInput = input
        end
    end)

    game:GetService("UserInputService").InputChanged:Connect(function(input)
        if (input == dragInput and dragToggle) then
            updateInput(input)
        end
    end)
end

for i,v in pairs(game.CoreGui:GetChildren()) do
    if v.Name == "ErrLib" then
        v:Destroy()
    end
end

function library:Window(options)
    local TitleUI = options.Title or "ErrHub"
    local Theme = options.Theme or "Light"
    local Logo = options.Logo or "10841291271"
    local Size = options.Size or Vector2.new(500, 300)
    local ToggleKey = options.ToggleKey or Enum.KeyCode.RightControl

    local ErrLib = Instance.new("ScreenGui")
    ErrLib.Name = "ErrLib"
    ErrLib.Parent = game.CoreGui
    ErrLib.ZIndexBehavior = Enum.ZIndexBehavior.Sibling

    local Mover = Instance.new("Frame")
    Mover.Name = "Mover"
    Mover.Parent = ErrLib
    Mover.BorderSizePixel = 0
    Mover.Position = UDim2.new(0.5, -Size.X/2, 0.5, -Size.Y/2) or options.Position
    Mover.Size = UDim2.new(0, Size.X, 0, Size.Y)
    local UICorner = Instance.new("UICorner")
    UICorner.Parent = Mover

    dragify(Mover)
    
    local Main = Instance.new("Frame")
    Main.Name = "Main"
    Main.Parent = Mover
    Main.BackgroundTransparency = 1.000
    Main.BorderSizePixel = 0
    Main.Size = UDim2.new(Mover.Size.X.Scale, Mover.Size.X.Offset, Mover.Size.Y.Scale, Mover.Size.Y.Offset)
    Main.ClipsDescendants = false

    -- THEME --
    if options.Theme == "Light" then
        Mover.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
        Main.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
    elseif options.Theme == "Dark" then
        Mover.BackgroundColor3 = Color3.fromRGB(30, 30, 30)
        Main.BackgroundColor3 = Color3.fromRGB(30, 30, 30)
    end

    local Main_Layout = Instance.new("UIListLayout")
    Main_Layout.Name = "Main_Layout"
    Main_Layout.Parent = Main
    Main_Layout.FillDirection = Enum.FillDirection.Vertical

    local TabsFunc = {}

    function TabsFunc:NewTab(options)
        local Logo = options.Logo or '4483345998'
        local Text = options.Text or ""

        local TitleBar = Instance.new("Frame")
        TitleBar.Name = "TitleBar"
        TitleBar.Parent = Main
        TitleBar.BackgroundColor3 = Color3.fromRGB(35, 35, 35)
        TitleBar.BorderSizePixel = 0
        TitleBar.Size = UDim2.new(1, 0, 0, 40)
        local UICorner = Instance.new("UICorner")
        UICorner.Parent = TitleBar

        local Tab = Instance.new("Frame")
        Tab.Name = "Tab"
        Tab.Parent = TitleBar
        if options.Visible == false then
            Tab.Visible = false
        elseif options.Visible == true then
            Tab.Visible = true
        else
            Tab.Visible = true
        end
        Tab.BorderSizePixel = 0
        Tab.Size = UDim2.new(0, 30, 0, 30)
        Tab.ClipsDescendants = false
        -- Center the tab but if there are other tabs, center it to the right of the last tab so that all of the tabs are equally spaced
        if Main:GetChildren() == 2 then
            Tab.Position = UDim2.new(0, Main:FindFirstChild("TitleBar").Size.X.Offset + 10, 0, 5)
        else
            Tab.Position = UDim2.new(0, 225, 0, 5)
        end
        local UICorner = Instance.new("UICorner")
        UICorner.Parent = Tab
    end

    return TabsFunc

end

    -- EXAMPLE --
    local Window = library:Window({
        Title = "KronosLib",
        Theme = "Dark",
        Logo = 3610245066,
        ToggleKey = Enum.KeyCode.LeftAlt
    })

    local Tab = Window:NewTab({
        Logo = 3610245066,
        Text = "Tab 1",
        Visible = true
    })

return library