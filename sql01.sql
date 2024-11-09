insert into vendor (name, location, email)
values ('The gioi di dong', 'Ha Noi', 'tgdd@test.com'),
       ('Dien may xanh', 'Ha Noi', 'dmx@test.com');

insert into store (name, location, vendor_id)
values ('The gioi di dong hoang mai', 'Hoang mai - HN', 1),
       ('The gioi di dong Hai Ba Trung', 'HNT - HN', 1),
       ('Diem may xanh Dong da', 'Dong Da - HN', 1);

insert into store (name, location, vendor_id)
values ('Diem may xanh hoang mai', 'Hoang mai - HN', 2);

drop table if exists store cascade;
create table if not exists store
(
    id          bigserial,
    vendor_id   bigint,
    name        text,
    location    text,
    created_at  timestamp with time zone NOT NULL DEFAULT now(),
    created_by  bigint,
    modified_at timestamp with time zone,
    modified_by bigint,
    deleted_at  timestamp with time zone,
                              deleted_by  bigint,
                              active      boolean DEFAULT TRUE,
                              constraint pkey_store primary key (id)
    );



select id, name, location, vendor_id, active from store where true;

update store set vendor_id = 2 where id = 3;
update store set vendor_id = 1 where id = 2;

insert into store (name, location, vendor_id) values ('test', 'test', 1);

delete from store where id = 4;
update store set active = false where id = 5;


select store.id,
       store.name        as store,
       store.location,
       case
           when vendor.id = 1 then json_build_object('id', vendor.id, 'name', vendor.name)
           else null end as vendor
from store
         join vendor on vendor.id = store.vendor_id
;

