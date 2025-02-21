leaders = ["Kote Ximshiashvili", "Davit Adeishvili", "Data Popxadze", "Gobron Witlauri", "Nata Kvantaliani", "Giorgi Shavadze"]
all_members_except_leaders = [ 'mate chikaidze', 'giga kochalidze', 'zuka qoridze',  'gio mindorashvili', 'rati chigogidze', 'ilia iremadze', 'davit mefarishvili', 'lasha giorgi azaladze', 'luka tatuashvili', 'nika macharashvili', 'ilia dzindzibadze' ]

def divide_into_groups(members, leaders):
    print("divide_into_groups function called")
    groups = []
    leader_index = 0
    member_index = 0

    while members:
        group = []

        if leader_index < len(leaders):
            group.append(leaders[leader_index])
            leader_index += 1

        while len(group) < 3 and member_index < len(members):
            group.append(members[member_index])
            member_index += 1

        if len(members) - member_index < 3:
            group.extend(members[member_index:])

        groups.append(group)
        members = members[member_index:]

    return groups

groups = divide_into_groups(all_members_except_leaders, leaders)
print("groups:", groups)