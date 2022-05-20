function Person(name, role, skill, gender) {
    this.name = name;
    this.role = role;
    this.skill = skill;
    this.gender = gender
}
window.onload = () => {
    btn = document.getElementsByClassName('btn')
    room = document.getElementsByClassName('room')
    Croom = document.getElementById('croom')
    selector = document.getElementById('selector')
    role = document.getElementsByName('role')
    roles = document.getElementById('role')
    skill = document.getElementsByName('skill')
    skills = document.getElementById('skill')
    closer = document.getElementById('close')
    named = document.getElementById('name')
    gender = document.getElementsByName('gender')
    genders = document.getElementById('gender')

    
    // roles.value = ''
    // skills.value = ''


    addPerson()
    for (i=0; i<btn.length; i++) {
        btn[i].addEventListener('click', addPerson)
        focu = btn[i].parentElement
        focu2 = btn[i]
    }

    closer.addEventListener('click', Close)

    for (i=0; i<role.length; i++) {
        role[i].addEventListener('click', function() {
            roles.value = this.value
        })
        if (i==0) {
            role[i].addEventListener('click', function() {
                skills.style.display = 'none'
                skills.value = 'All'
            })
        }
        else {
            role[i].addEventListener('click', function() {
                skills.style.display = 'block'
            })
        }
    }

    for (i=0; i<skill.length; i++) {
        skill[i].addEventListener('click', function() {
            skills.value = this.value
        })
    }

    for (i=0; i<gender.length; i++) {
        gender[i].addEventListener('click', function() {
            genders.value = this.value
        })
    }


}

function addPerson() {
    selector.style.display = 'block'
}

function Close() {
    tmp = new Person(named.value, roles.value, skills.value, genders.value)
    tmpProfile = document.createElement('div')
    tmpName = document.createElement('h5')
    tmpName.textContent = tmp.name
    tmpRole = document.createElement('span')
    tmpRole.textContent = tmp.role+':'
    tmpSkill = document.createElement('span')
    tmpSkill.textContent = tmp.skill
    br = document.createElement('br')
    tmpGender = document.createElement('span')
    tmpGender.textContent = tmp.gender

    tmpProfile.appendChild(tmpName)
    tmpProfile.appendChild(tmpRole)
    tmpProfile.appendChild(tmpSkill)
    tmpProfile.appendChild(br)
    tmpProfile.appendChild(tmpGender)

    focu.removeChild(focu2)
    focu.appendChild(tmpProfile)
    focu.appendChild(focu2)
    selector.style.display = 'none'
}
