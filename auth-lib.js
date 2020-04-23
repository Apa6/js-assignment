const name = '';
const pass = '';
const groupsAll = {                                          // массив всех доступных групп с массивом прав
  admin: ['create users','delete users',],
  manager: ['delete users','create users'],
  basic: ['basic users','use users'],
};
const rightsAll = [];

const usersAll = [];

// Возвращает массив всех пользователей.
function users() {
  return usersAll;
}

//Создает нового пользователя с указанным логином username и паролем password, возвращает созданного пользователя.
function createUsers(name,pass) {
  usersAll.push({nickname:name,password:pass,groups: []})
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
const arrayGroups = [];
function userGroups(name) {
  usersAll.forEach((items) => {
    if (items.nickname == name) {
     arrayGroups.push(items.groups);
    }
  })
  return arrayGroups;
}


// Добавляет пользователя user в группу group
function addUserToGroup(user, group) {      
  for (let key in groupsAll) {
    let indexKey = key.indexOf(group);
    let sliceKey = key.slice(indexKey);
    
    usersAll.forEach(items => {
      if (items.nickname == user && sliceKey == group) {
        items.groups.splice(0,0,sliceKey)
      }
    })
  }
}

// Удаляет пользователя user из группы group. Должна бросить исключение, если пользователя user нет в группе group
function removeUserFromGroup(user, group) {
  usersAll.forEach((items,index) => {
    let indexGroup = items.groups.indexOf(group);
    if (items.nickname == user && indexGroup !== -1) {
      items.groups.splice(indexGroup,1)
    }
  })
}

// Возвращает массив прав
function right() {
  return rightsAll;
}

// Создает новое право с именем name и возвращает его
function createRight(right) {
  rightsAll.push(right)
  return right
}

// Удаляет право right
function deleteRight(right) {
  let indexRight = rightsAll.indexOf(right);
  if (indexRight !== -1) {
    rightsAll.splice(indexRight,1);
  }
}

// Добавляет право right к группе group
function addRightToGroup(right,group) {
  let newRight = right;
  let indexRight = rightsAll.indexOf(newRight);
  for (let key in groupsAll) {
    if(key == group && indexRight !== -1) {
      groupsAll[key].push(newRight)
    }
  }
}

// Удаляет право `right` из группы `group`. Должна бросить исключение, если права `right` нет в группе `group` <br><br>
function groups(right,group) {
  for (let key in groupsAll) {
    let indexRight = groupsAll[key].indexOf(right);
    let indexGroup = key.indexOf(group)
    if (indexRight !== -1 && indexGroup !== -1) {
      groupsAll[key].splice(indexRight,1)
    } 
  }
} 

// Возвращает массив групп
function createGroup(){
	
}

// Создает новую группу и возвращает её.
function createGroup(group) {
  let arrayGroupsAll = Object.entries(groupsAll);
  arrayGroupsAll.push([group,[]])
  let newArrayGroups =  Object.fromEntries(arrayGroupsAll)
  return groupsAll = newArrayGroups  
}

// Удаляет группу group
function deleteGroup(group) {
  let arrayGroupsAll = Object.entries(groupsAll);
  for (let value of arrayGroupsAll) {
    let indexGroup = value.indexOf(group);
    if (indexGroup !== -1) {
      value.splice(indexGroup,2)
    }
  }
  let newObjectGroups = Object.fromEntries(arrayGroupsAll);
  return groupsAll = newObjectGroups;
}

// Возвращает массив прав, которые принадлежат группе group
function groupRights(group) {
  for (let key in groupsAll) {
    let indexGroup = key.indexOf(group);
    if (indexGroup !== -1) {
      return groupsAll[key];
    }
  } 
}

// Добавляет право right к группе group
function addRightToGroup(right,group) {
  let indexRight = rightsAll.indexOf(right);
  for (let key in groupsAll) {
    if(key == group && indexRight !== -1) {
      groupsAll[key].push(right)
    }
  }
}

// Удаляет право right из группы group. Должна бросить исключение, если права right нет в группе group
function removeRightFromGroup(right,group) {
  for (let key in groupsAll) {
    let indexRight = groupsAll[key].indexOf(right);
    let indexGroup = key.indexOf(group)
    if (indexRight !== -1 && indexGroup !== -1) {
      groupsAll[key].splice(indexRight,1)
    } 
  }
} 

function login(username, password) {}

function currentUser() {}

function logout() {}

function isAuthorized(user, right) {}
