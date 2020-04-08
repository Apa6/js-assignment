
let usersAll = [
  {nickname:"Petr", password: 222, groups: "admin"},
  {nickname:"Alexey", password: 222, groups: ["admin","manager","basicUser"]},
  {nickname:"Askar", password: 222, groups: ["marketStaff","basicUser"]}
];

// Возвращает массив всех пользователей.
function users() {}

//Создает нового пользователя с указанным логином username и паролем password, возвращает созданного пользователя.
function createUsers(name,pass) {
  usersAll.push({nickname:name,password:pass})
  return (name,pass)
}

// Удаляет пользователя user
function deleteUsers(name) {
  usersAll.forEach((items,index) => {
    if (items.nickname == name) {
      usersAll.splice(index,1)
    }
    return (items,index)
  })
  
}

// Возвращает массив групп, к которым принадлежит пользователь user
function userGroups(user) {}

// Добавляет пользователя user в группу group
function addUserToGroup(user, group) {}

// Удаляет пользователя user из группы group. Должна бросить исключение, если пользователя user нет в группе group
function removeUserFromGroup(user, group) {}

// Возвращает массив прав
function rights() {}

// Создает новое право с именем name и возвращает его
function createRight(name) {}

// Удаляет право right
function deleteRight(right) {}

// Возвращает массив групп
function groups() {}

// Создает новую группу и возвращает её.
function createGroup(name) {}

// Удаляет группу group
function deleteGroup(group) {}

// Возвращает массив прав, которые принадлежат группе group
function groupRights() {}

// Добавляет право right к группе group
function addRightToGroup() {}

// Удаляет право right из группы group. Должна бросить исключение, если права right нет в группе group
function removeRightFromGroup() {}

function login(username, password) {}

function currentUser() {}

function logout() {}

function isAuthorized(user, right) {}
